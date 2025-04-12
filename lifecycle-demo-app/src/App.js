import { useState } from "react";
import "./App.css";
import LifecycleDemo from "./LifecycleDemo";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "🧹 消す（アンマウント）" : "🌱 出す（マウント）"}
      </button>

      {show && <LifecycleDemo />}
    </div>
  );
}

export default App;
