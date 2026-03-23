import React, { useState, useEffect, useRef } from "react";

function PostMaterials({ setPage }) {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState("");
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [lang, setLang] = useState("en");
  const [listening, setListening] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [mounted, setMounted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const chatEndRef = useRef(null);

  const handleTextSelection = () => {
    const t = window.getSelection().toString();
    setSelectedText(t);
  };

  const clearChat = async () => {
    await fetch("http://127.0.0.1:8000/clear-history", { method: "DELETE" });
    setChatHistory([]);
    setShowClearConfirm(false);
  };

  useEffect(() => {
    setMounted(true);
    fetch("http://127.0.0.1:8000/history")
      .then(res => res.json())
      .then(data => {
        const formatted = [];
        data.history.forEach(chat => {
          formatted.push({ type: "user", text: chat.question });
          formatted.push({ type: "bot", text: chat.answer });
        });
        setChatHistory(formatted);
      });
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const uploadText = async () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("text", text);
    const res = await fetch("http://127.0.0.1:8000/upload-text", { method: "POST", body: formData });
    const data = await res.json();
    setNotes(data.content);
    setUploading(false);
  };

  const uploadPDF = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("http://127.0.0.1:8000/upload-pdf", { method: "POST", body: formData });
    const data = await res.json();
    setNotes(data.content);
  };

  const askQuestion = async () => {
    if (!question.trim()) return;
    const formData = new FormData();
    formData.append("question", question);
    formData.append("lang", lang);
    formData.append("selected_text", selectedText);
    formData.append("mode", "text");
    const res = await fetch("http://127.0.0.1:8000/chat", { method: "POST", body: formData });
    const data = await res.json();
    setChatHistory(prev => [...prev, { type: "user", text: question }, { type: "bot", text: data.answer }]);
    setQuestion("");
  };

  const startVoice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = lang === "hi" ? "hi-IN" : "en-IN";
    setListening(true);
    recognition.start();
    recognition.onresult = async (event) => {
      const t = event.results[0][0].transcript;
      setListening(false);
      const formData = new FormData();
      formData.append("question", t);
      formData.append("lang", lang);
      formData.append("selected_text", selectedText);
      formData.append("mode", "voice");
      const res = await fetch("http://127.0.0.1:8000/chat", { method: "POST", body: formData });
      const data = await res.json();
      setChatHistory(prev => [...prev, { type: "user", text: t }, { type: "bot", text: data.answer }]);
      const speech = new SpeechSynthesisUtterance(data.answer);
      speech.lang = data.lang_code;
      window.speechSynthesis.speak(speech);
    };
    recognition.onend = () => setListening(false);
  };

  const downloadChat = () => {
    let content = "";
    chatHistory.forEach(msg => {
      content += (msg.type === "user" ? "User: " : "Bot: ") + msg.text + "\n\n";
    });
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat_history.txt";
    a.click();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); askQuestion(); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pm-root {
          display: flex; height: 100vh;
          background: #0e0e0e; font-family: 'DM Sans', sans-serif; color: #e8e3da;
          overflow: hidden;
          opacity: ${mounted ? 1 : 0}; transition: opacity 0.5s ease;
        }
        .pm-blob { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
        .pm-blob-1 { width: 380px; height: 380px; background: #c8a96e; opacity: 0.1; top: -80px; left: -60px; }
        .pm-blob-2 { width: 300px; height: 300px; background: #3d7a8a; opacity: 0.09; bottom: -40px; right: 30%; }

        .pm-left  { width: 55%; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,0.06); z-index: 1; overflow: hidden; }
        .pm-right { width: 45%; display: flex; flex-direction: column; z-index: 1; overflow: hidden; }

        .pm-panel-header {
          padding: 20px 28px 18px; border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;
        }
        .pm-panel-title {
          font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 500; color: #f5f0e8;
          display: flex; align-items: center; gap: 10px;
        }
        .pm-panel-icon {
          width: 28px; height: 28px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center; font-size: 13px;
          background: rgba(200,169,110,0.12); border: 1px solid rgba(200,169,110,0.2);
        }
        .pm-back {
          display: flex; align-items: center; gap: 6px; background: none;
          border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.45);
          font-family: 'DM Sans', sans-serif; font-size: 12px; padding: 6px 12px;
          border-radius: 8px; cursor: pointer; transition: color 0.2s, border-color 0.2s;
        }
        .pm-back:hover { color: #c8a96e; border-color: rgba(200,169,110,0.35); }

        .pm-left-body { flex: 1; overflow-y: auto; padding: 24px 28px; display: flex; flex-direction: column; gap: 20px; }
        .pm-left-body::-webkit-scrollbar { width: 4px; }
        .pm-left-body::-webkit-scrollbar-thumb { background: rgba(200,169,110,0.2); border-radius: 4px; }

        .pm-label { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 8px; }

        .pm-textarea {
          width: 100%; height: 110px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; color: #e8e3da;
          font-family: 'DM Sans', sans-serif; font-size: 13.5px; padding: 12px 14px;
          resize: none; outline: none; transition: border-color 0.2s; line-height: 1.6;
        }
        .pm-textarea::placeholder { color: rgba(255,255,255,0.2); }
        .pm-textarea:focus { border-color: rgba(200,169,110,0.35); }

        .pm-action-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }

        .pm-btn {
          display: inline-flex; align-items: center; gap: 7px; padding: 9px 16px;
          border-radius: 9px; border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.05); color: #d8d3ca;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s; white-space: nowrap;
        }
        .pm-btn:hover { background: rgba(255,255,255,0.09); border-color: rgba(200,169,110,0.3); transform: translateY(-1px); }
        .pm-btn:active { transform: translateY(0); }
        .pm-btn-gold { background: linear-gradient(135deg, #c8a96e, #a8843e); border-color: transparent; color: #0e0e0e; font-weight: 600; }
        .pm-btn-gold:hover { background: linear-gradient(135deg, #d4b87a, #b8944e); border-color: transparent; }

        .pm-file-label {
          display: inline-flex; align-items: center; gap: 7px; padding: 9px 16px;
          border-radius: 9px; border: 1px dashed rgba(200,169,110,0.25);
          background: rgba(200,169,110,0.04); color: rgba(200,169,110,0.7);
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
          cursor: pointer; transition: background 0.2s, border-color 0.2s;
        }
        .pm-file-label:hover { background: rgba(200,169,110,0.08); border-color: rgba(200,169,110,0.45); }
        .pm-file-input { display: none; }

        .pm-notes-box {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px; padding: 14px; font-size: 13.5px; line-height: 1.75;
          color: rgba(255,255,255,0.65); cursor: text; min-height: 120px; user-select: text;
        }
        .pm-notes-empty { color: rgba(255,255,255,0.18); font-style: italic; }

        .pm-selected-badge {
          display: flex; align-items: flex-start; gap: 8px;
          background: rgba(200,169,110,0.07); border: 1px solid rgba(200,169,110,0.18);
          border-radius: 8px; padding: 9px 12px; font-size: 12.5px;
          color: rgba(200,169,110,0.85); line-height: 1.5; word-break: break-word;
        }

        /* Chat */
        .pm-chat-body {
          flex: 1; overflow-y: auto; padding: 20px 24px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .pm-chat-body::-webkit-scrollbar { width: 4px; }
        .pm-chat-body::-webkit-scrollbar-thumb { background: rgba(200,169,110,0.2); border-radius: 4px; }

        .pm-chat-empty {
          flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 8px; color: rgba(255,255,255,0.18); font-size: 13px; text-align: center;
        }
        .pm-chat-empty-icon { font-size: 28px; opacity: 0.4; }

        .pm-bubble-wrap { display: flex; flex-direction: column; gap: 2px; }
        .pm-bubble-wrap.user { align-items: flex-end; }
        .pm-bubble-wrap.bot  { align-items: flex-start; }
        .pm-bubble-sender { font-size: 10.5px; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.25); margin-bottom: 4px; padding: 0 4px; }
        .pm-bubble { max-width: 80%; padding: 10px 14px; border-radius: 12px; font-size: 13.5px; line-height: 1.65; word-break: break-word; }
        .pm-bubble.user { background: linear-gradient(135deg, #c8a96e, #a8843e); color: #0e0e0e; border-bottom-right-radius: 4px; }
        .pm-bubble.bot  { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.07); color: #d8d3ca; border-bottom-left-radius: 4px; }

        /* Footer */
        .pm-chat-footer { padding: 16px 20px; border-top: 1px solid rgba(255,255,255,0.06); flex-shrink: 0; }
        .pm-chat-controls { display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; align-items: center; }

        .pm-lang-select {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 8px; color: #d8d3ca; font-family: 'DM Sans', sans-serif;
          font-size: 12px; padding: 6px 10px; outline: none; cursor: pointer;
        }
        .pm-lang-select option { background: #1a1a1a; }

        .pm-voice-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px;
          border-radius: 8px; border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.05); color: #d8d3ca;
          font-family: 'DM Sans', sans-serif; font-size: 12.5px; cursor: pointer; transition: all 0.2s;
        }
        .pm-voice-btn.listening { border-color: rgba(200,169,110,0.5); background: rgba(200,169,110,0.1); color: #c8a96e; }
        .pm-voice-dot { width: 7px; height: 7px; border-radius: 50%; background: #c8a96e; animation: blink 1s infinite; }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.2; } }

        .pm-icon-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px;
          border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);
          background: transparent; color: rgba(255,255,255,0.3);
          font-family: 'DM Sans', sans-serif; font-size: 12px; cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
        }
        .pm-icon-btn:hover { color: #c8a96e; border-color: rgba(200,169,110,0.3); }

        /* Clear + confirm */
        .pm-confirm-wrap { position: relative; margin-left: auto; }
        .pm-clear-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px;
          border-radius: 8px; border: 1px solid rgba(239,68,68,0.2);
          background: transparent; color: rgba(239,68,68,0.45);
          font-family: 'DM Sans', sans-serif; font-size: 12px; cursor: pointer;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .pm-clear-btn:hover:not(:disabled) { color: #ef4444; border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.06); }
        .pm-clear-btn:disabled { opacity: 0.25; cursor: not-allowed; }

        .pm-confirm-pop {
          position: absolute; bottom: calc(100% + 8px); right: 0;
          background: #1c1c1c; border: 1px solid rgba(239,68,68,0.28);
          border-radius: 10px; padding: 12px 14px;
          display: flex; flex-direction: column; gap: 10px;
          white-space: nowrap; z-index: 20;
          box-shadow: 0 8px 28px rgba(0,0,0,0.55);
          animation: popUp 0.15s ease;
        }
        @keyframes popUp { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        .pm-confirm-text { font-size: 12.5px; color: rgba(255,255,255,0.5); }
        .pm-confirm-actions { display: flex; gap: 8px; }
        .pm-confirm-yes {
          flex: 1; padding: 7px 0; border-radius: 7px; border: none;
          background: #ef4444; color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600;
          cursor: pointer; transition: opacity 0.2s;
        }
        .pm-confirm-yes:hover { opacity: 0.85; }
        .pm-confirm-no {
          flex: 1; padding: 7px 0; border-radius: 7px;
          border: 1px solid rgba(255,255,255,0.1); background: transparent;
          color: rgba(255,255,255,0.38); font-family: 'DM Sans', sans-serif;
          font-size: 12px; cursor: pointer; transition: color 0.2s;
        }
        .pm-confirm-no:hover { color: rgba(255,255,255,0.65); }

        .pm-input-row { display: flex; gap: 8px; align-items: flex-end; }
        .pm-chat-input {
          flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px; color: #e8e3da; font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; padding: 10px 14px; outline: none; transition: border-color 0.2s;
        }
        .pm-chat-input::placeholder { color: rgba(255,255,255,0.2); }
        .pm-chat-input:focus { border-color: rgba(200,169,110,0.35); }

        .pm-send-btn {
          width: 40px; height: 40px; border-radius: 10px; border: none;
          background: linear-gradient(135deg, #c8a96e, #a8843e); color: #0e0e0e;
          font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: opacity 0.2s, transform 0.15s;
        }
        .pm-send-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .pm-send-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }
      `}</style>

      <div className="pm-root">
        <div className="pm-blob pm-blob-1" />
        <div className="pm-blob pm-blob-2" />

        {/* ── LEFT PANEL ── */}
        <div className="pm-left">
          <div className="pm-panel-header">
            <div className="pm-panel-title">
              <span className="pm-panel-icon">📄</span>
              Post Materials
            </div>
            <button className="pm-back" onClick={() => setPage("home")}>← Back</button>
          </div>

          <div className="pm-left-body">
            <div>
              <p className="pm-label">Paste Text</p>
              <textarea
                className="pm-textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your study material here…"
              />
            </div>

            <div className="pm-action-row">
              <button className="pm-btn pm-btn-gold" onClick={uploadText}>
                {uploading ? "Uploading…" : "⬆ Upload Text"}
              </button>
              <label className="pm-file-label">
                📎 Upload PDF
                <input type="file" className="pm-file-input" onChange={uploadPDF} />
              </label>
            </div>

            <div>
              <p className="pm-label">Generated Notes</p>
              <div className="pm-notes-box" onMouseUp={handleTextSelection}>
                {notes
                  ? notes
                  : <span className="pm-notes-empty">Notes will appear here after uploading…</span>
                }
              </div>
            </div>

            {selectedText && (
              <div className="pm-selected-badge">
                <span>✦</span>
                <span><b style={{ opacity: 0.6 }}>Selected:</b> {selectedText}</span>
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="pm-right">
          <div className="pm-panel-header">
            <div className="pm-panel-title">
              <span className="pm-panel-icon">💬</span>
              Ask the AI
            </div>
          </div>

          <div className="pm-chat-body">
            {chatHistory.length === 0 ? (
              <div className="pm-chat-empty">
                <span className="pm-chat-empty-icon">🤖</span>
                <span>Ask anything about your material</span>
              </div>
            ) : (
              chatHistory.map((msg, i) => (
                <div key={i} className={`pm-bubble-wrap ${msg.type}`}>
                  <div className="pm-bubble-sender">{msg.type === "user" ? "You" : "AI"}</div>
                  <div className={`pm-bubble ${msg.type}`}>{msg.text}</div>
                </div>
              ))
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="pm-chat-footer">
            <div className="pm-chat-controls">
              <select className="pm-lang-select" value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="en">🌐 English</option>
                <option value="hi">🇮🇳 Hindi</option>
              </select>

              <button className={`pm-voice-btn ${listening ? "listening" : ""}`} onClick={startVoice}>
                {listening ? <><span className="pm-voice-dot" /> Listening…</> : "🎤 Speak"}
              </button>

              <button className="pm-icon-btn" onClick={downloadChat}>↓ Export</button>

              {/* Clear Chat with inline confirm */}
              <div className="pm-confirm-wrap">
                <button
                  className="pm-clear-btn"
                  onClick={() => setShowClearConfirm(v => !v)}
                  disabled={chatHistory.length === 0}
                >
                  🗑 Clear
                </button>
                {showClearConfirm && (
                  <div className="pm-confirm-pop">
                    <span className="pm-confirm-text">Clear all chat history?</span>
                    <div className="pm-confirm-actions">
                      <button className="pm-confirm-yes" onClick={clearChat}>Yes, clear</button>
                      <button className="pm-confirm-no" onClick={() => setShowClearConfirm(false)}>Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pm-input-row">
              <input
                className="pm-chat-input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question… (Enter to send)"
              />
              <button className="pm-send-btn" onClick={askQuestion} disabled={!question.trim()}>›</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostMaterials;
