import React, { useState } from "react";

function OnlineMaterials({ setPage }) {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const formData = new FormData();
      formData.append("question", query);
      formData.append("lang", "en");

      const response = await fetch(
        "https://contextawaredoubtchatbot.onrender.com/chat",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      setAnswer(data.response || data.answer || "No reply from AI");
    } catch (error) {
      console.error(error);
      setAnswer("Error connecting to AI server.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <button onClick={() => setPage("home")}>⬅ Back</button>

      <h2>Ask Anything</h2>

      <input
        type="text"
        placeholder="Ask anything (e.g., What is AI?)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "300px",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={askAI}
        style={{
          marginLeft: "10px",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        Ask
      </button>

      {loading && <p style={{ marginTop: "20px" }}>⏳ Thinking...</p>}

      {answer && (
        <div style={{ marginTop: "20px" }}>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default OnlineMaterials;
