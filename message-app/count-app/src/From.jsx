import React from "react";

function From({ input, setInput }) {
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default From;
