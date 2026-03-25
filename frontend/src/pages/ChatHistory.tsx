import { motion } from "framer-motion";
import Header from "@/components/Header";
import { MessageCircle, Clock, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ChatItem {
  id: string;
  lessonTitle: string;
  category: string;
  lastMessage: string;
  messageCount: number;
  timestamp: string;
}

const ChatHistory = () => {
  const [sessions, setSessions] = useState<ChatItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
  const loadSessions = async () => {
    const allSessions: any[] = [];

    const keys = Object.keys(localStorage).filter(key =>
      key.startsWith("session_")
    );

    for (const key of keys) {
      const sessionId = localStorage.getItem(key);
      if (!sessionId) continue;

      const res = await fetch(`https://contextawaredoubtchatbot.onrender.com/history/${sessionId}`);
      const data = await res.json();

      if (data.messages && data.messages.length > 0) {
        const lastMessage =
          data.messages[data.messages.length - 1].parts[0].text;

        allSessions.push({
          id: sessionId,
          lessonTitle: key.replace("session_", ""),
          category: "Learning",
          lastMessage,
          messageCount: data.messages.length,
          timestamp: "Recent",
        });
      }
    }

    setSessions(allSessions);
  };

  loadSessions();
}, []);
  const deleteSession = (id: string) => {
  setSessions(prev => prev.filter(s => s.id !== id));

  // also remove from localStorage
  Object.keys(localStorage).forEach(key => {
    if (localStorage.getItem(key) === id) {
      localStorage.removeItem(key);
    }
  });
};

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="font-display text-4xl font-bold text-foreground mb-3">
              Chat History
            </h1>
            <p className="text-muted-foreground">
              Your previous conversations with the learning assistant.
            </p>
          </motion.div>

          {sessions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <MessageCircle className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                No chat sessions yet. Start learning to create your first conversation!
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {sessions.map((session, i) => (
                <motion.div
                  key={session.id}
                  onClick={() => {
                    localStorage.setItem("activeSessionId", session.id);
                    window.open(`/chat-view?sessionId=${session.id}`, "_blank"); // 👈 change if your chatbot route is different
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-2xl bg-card border border-border hover-lift group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/15 text-accent mb-2">
                        {session.category}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {session.lessonTitle}
                      </h3>
                    </div>

                    <button
                     onClick={(e) => {
  e.stopPropagation();
  deleteSession(session.id);
}}
                      className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                    Last: "{session.lastMessage}"
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" /> {session.messageCount} messages
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {session.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
