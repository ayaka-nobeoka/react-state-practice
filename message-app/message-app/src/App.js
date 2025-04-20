import "./App.css";
import { useState } from "react";

//ボタンを押すとメッセージが変わるアプリ

function App() {
  const [message, setMessage] = useState("🐻の色を変えますよ〜！！");

  const handleClick = () => {
    setMessage("🐻‍❄️のクマに");
  };
  return (
    <div className="App">
      <button onClick={handleClick}>押したら変わるよ！</button>
      <div>{message}</div>
    </div>
  );
}

export default App;
