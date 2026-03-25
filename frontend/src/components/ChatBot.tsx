import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Sparkles, ChevronDown } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatBotProps {
  lessonTitle: string;
  selectedText?: string;
}

const ChatBot = ({ lessonTitle, selectedText }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ FIXED sessionId (reactive)
  const [sessionId, setSessionId] = useState(
  localStorage.getItem("activeSessionId") || `${Date.now()}`
);

useEffect(() => {
  localStorage.setItem("activeSessionId", sessionId);
  localStorage.setItem(`session_${lessonTitle}`, sessionId);
}, [sessionId]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Hi! I'm your learning assistant for "${lessonTitle}". Ask me anything about this lesson — I'll answer based on the content you're studying.`,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // selected text auto open
  useEffect(() => {
    if (selectedText) {
      setIsOpen(true);
      setInput(`Can you explain: "${selectedText}"?`);
    }
  }, [selectedText]);

  // ✅ LOAD CHAT FROM HISTORY (FIXED)
  useEffect(() => {
    const storedSessionId =
  localStorage.getItem("activeSessionId") || "default";
    setSessionId(storedSessionId);

    fetch(`https://contextawaredoubtchatbot.onrender.com/history/${storedSessionId}`)
      .then(res => res.json())
      .then(data => {
        if (data.messages && data.messages.length > 0) {
          const formatted = data.messages.map((m, i) => ({
            id: i.toString(),
            text: m.parts[0].text,
            sender: m.role === "user" ? "user" : "bot",
            timestamp: new Date(),
          }));

          setMessages(formatted);
          setIsOpen(true);
        }
      })
      .catch(err => console.error(err));
  }, []);

  // ✅ SEND MESSAGE
  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("https://contextawaredoubtchatbot.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: selectedText
            ? `Explain this clearly: ${selectedText}`
            : `Lesson: ${lessonTitle}\nQuestion: ${currentInput}`,
          sessionId: sessionId,
        }),
      });

      const data = await res.json();

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply
  .replace(/\*\*/g, "")
  .replace(/\*/g, "")
  .replace(/#/g, "")
  .replace(/`/g, "")
  .replace(/>/g, "")
  .replace(/\n{2,}/g, "\n")
  .trim(),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Error connecting to server",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }

    setIsTyping(false);
  }, [input, sessionId, selectedText, lessonTitle]);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-amber flex items-center justify-center shadow-lg"
          >
            <MessageCircle className="w-6 h-6 text-primary" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed bottom-6 right-6 z-50 w-[380px] max-h-[560px] rounded-2xl overflow-hidden glass-panel flex flex-col">
            {/* Header */}
            <div className="px-5 py-4 gradient-amber flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-primary">Learning Assistant</p>
                  <p className="text-xs text-primary/70">{lessonTitle}</p>
                </div>
              </div>

              <button onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4 text-primary" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[80%] p-2 rounded-xl bg-secondary">
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && <div>Typing...</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                className="flex-1 p-2 bg-secondary rounded"
              />
              <button onClick={sendMessage}>
                <Send />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
