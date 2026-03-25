from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from dotenv import load_dotenv
load_dotenv()
app = FastAPI()

# ✅ CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔑 API KEY
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY") 

# ✅ Gemini URL
URL = f"https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"

# 🔥 In-memory sessions (NO DB)
sessions = {}


@app.get("/")
def home():
    return {"message": "Backend running"}

@app.get("/history/{session_id}")
def get_history(session_id: str):
    if session_id in sessions:
        return {"messages": sessions[session_id]}
    return {"messages": []}
@app.post("/chat")
async def chat(data: dict):
    user_message = data.get("message")
    session_id = data.get("sessionId", "default")

    # ✅ create session if not exists
    if session_id not in sessions:
        sessions[session_id] = []

    history = sessions[session_id]

    # ✅ Gemini payload with history
    payload = {
    "contents": history + [
        {
            "role": "user",
            "parts": [{
                "text": f"""
You are a strict learning assistant.

ONLY answer based on the provided lesson or selected text.
If the answer is not in the given content, say:
"I can only answer based on the provided lesson."

Do NOT use outside knowledge.

Question:
{user_message}
"""
            }]
        }
    ]
}

    try:
        response = requests.post(URL, json=payload)

        result = response.json()
        print("GEMINI RESPONSE:", result)

        reply = result["candidates"][0]["content"]["parts"][0]["text"]

        # ✅ store history
        sessions[session_id].append({
            "role": "user",
            "parts": [{"text": user_message}]
        })
        sessions[session_id].append({
            "role": "model",
            "parts": [{"text": reply}]
        })

        # ✅ limit history (avoid memory overflow)
        sessions[session_id] = sessions[session_id][-10:]

        return {"reply": reply}

    except Exception as e:
        print("ERROR:", str(e))
        return {"reply": "Error from Gemini"}