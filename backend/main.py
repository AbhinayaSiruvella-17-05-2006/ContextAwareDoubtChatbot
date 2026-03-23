from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import fitz
import uvicorn
import ollama
from deep_translator import GoogleTranslator
from pymongo import MongoClient
from datetime import datetime
import os
from dotenv import load_dotenv

# 🔥 Load .env
load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔑 MongoDB Atlas
MONGO_URL = os.getenv("MONGO_URL")

client = MongoClient(MONGO_URL)
db = client["chatbot_db"]
collection = db["chat_history"]

current_notes = ""


# 🔁 Translation
def translate_msg(text, target):
    try:
        return GoogleTranslator(source='auto', target=target).translate(text)
    except:
        return text


# ✅ Upload TEXT
@app.post("/upload-text")
def upload_text(text: str = Form(...)):
    global current_notes
    current_notes = text
    return {"content": current_notes}


# ✅ Upload PDF
@app.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):
    global current_notes

    pdf_bytes = await file.read()
    doc = fitz.open(stream=pdf_bytes, filetype="pdf")

    text = ""
    for page in doc:
        text += page.get_text()

    current_notes = text
    return {"content": current_notes}


# ✅ CHAT + SAVE
@app.post("/chat")
def chat(
    question: str = Form(...),
    lang: str = Form("en"),
    selected_text: str = Form(""),
    mode: str = Form("voice")
):
    global current_notes

    english_question = translate_msg(question, "en")
    context = selected_text if selected_text.strip() else current_notes

    if mode == "text":
        prompt = f"""
You are a strict academic tutor.

Rules:
1. Answer ONLY from notes.
2. Do NOT add information.
3. No examples or stories.
4. If not present → "Not in notes".

NOTES:
{context}

QUESTION:
{english_question}
"""
    else:
        prompt = f"""
You are a helpful tutor.

Explain simply using notes.
Give example if possible.

NOTES:
{context}

QUESTION:
{english_question}
"""

    response = ollama.generate(
        model="llama3.2:1b",
        prompt=prompt
    )

    english_answer = response["response"].strip()
    final_answer = translate_msg(english_answer, lang)

    # 🔥 SAVE TO ATLAS
    collection.insert_one({
        "question": question,
        "answer": final_answer,
        "timestamp": datetime.utcnow()
    })

    return {
        "answer": final_answer,
        "lang_code": f"{lang}-IN"
    }


# ✅ FETCH HISTORY
@app.get("/history")
def get_history():
    chats = list(collection.find({}, {"_id": 0}))
    return {"history": chats}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)