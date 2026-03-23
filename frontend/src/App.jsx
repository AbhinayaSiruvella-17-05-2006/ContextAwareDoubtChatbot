import React, { useState } from "react";
import Home from "./Home.jsx";
import OnlineMaterials from "./OnlineMaterials.jsx";
import PostMaterials from "./PostMaterials.jsx";
function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <Home setPage={setPage} />}
      {page === "online" && <OnlineMaterials setPage={setPage} />}
      {page === "post" && <PostMaterials setPage={setPage} />}
    </div>
  );
}

export default App;