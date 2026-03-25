import ChatBot from "@/components/ChatBot";
import html2pdf from "html2pdf.js";
import { useEffect } from "react";


const ChatView = () => {
    useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("sessionId");

  if (sessionId) {
    localStorage.setItem("activeSessionId", sessionId);
  }
}, []);
  const downloadChat = () => {
  const sessionId = localStorage.getItem("activeSessionId") || "default";
  fetch(`http://127.0.0.1:8000/history/${sessionId}`)
    .then(res => res.json())
    .then(data => {
      if (!data.messages) return;

      const content = document.createElement("div");

      content.innerHTML = `
        <div style="font-family: Arial; padding: 20px;">
          <h2 style="text-align:center;">Chat History</h2>
          ${data.messages.map((m: any) => {
            const role = m.role === "user" ? "You" : "Assistant";

            let text = m.parts[0].text
              .replace(/\*\*/g, "")
              .replace(/\*/g, "")
              .replace(/#/g, "")
              .replace(/`/g, "")
              .replace(/\n/g, "<br>");

            return `
              <div style="margin-bottom:15px;">
                <strong>${role}:</strong>
                <div style="margin-top:5px;">${text}</div>
              </div>
            `;
          }).join("")}
        </div>
      `;

      html2pdf()
        .from(content)
        .set({
          margin: 10,
          filename: "chat-history.pdf",
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        })
        .save();
    })
    .catch(err => console.error(err));
};
  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-10">

      {/* Top section */}
      <div className="w-full max-w-3xl px-4 mb-4 flex flex-col gap-2">

        <button
          onClick={() => (window.location.href = "/courses")}
          className="text-sm text-orange-500 hover:underline text-left"
        >
          ← Back to courses
        </button>

        <button
          onClick={downloadChat}
          className="text-sm bg-orange-500 text-white px-3 py-1 rounded-md hover:opacity-90 w-fit"
        >
          Download Chat
        </button>

      </div>

      {/* Chatbot */}
      <ChatBot lessonTitle="Chat History" />

    </div>
  );
};

export default ChatView;