import React, { useState } from "react";

function OnlineMaterials({ setPage }) {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = () => {
    if (!query.trim()) return;

    // Static AI response written directly in code
    setAnswer(
      "Artificial Intelligence (AI) is a branch of computer science that develops machines capable of performing tasks requiring human intelligence, such as learning, reasoning, problem-solving, and perception. It utilizes algorithms and vast datasets to identify patterns, make decisions, and automate complex tasks."
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setPage("home")}>⬅ Back</button>

      <h2>Ask Anything</h2>

      <input
        type="text"
        placeholder="Ask anything (e.g., What is AI?)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />

      <button onClick={askAI} style={{ marginLeft: "10px" }}>
        Ask
      </button>

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