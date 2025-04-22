import "./App.css";
import { useState } from "react";
import CounterButton from "./CounterButton";
import From from "./From";
//ボタンを押すたびに数字が増える

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount(count + 1);
  };
  const handelMinus = () => {
    setCount(count - 1);
  };
  const handelSubmit = () => {
    if (input.trim() === "") return;
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <From input={input} setInput={setInput} />
      <button onClick={handelSubmit}>submit</button>
      <CounterButton onIncrement={handelClick} onDecrease={handelMinus} />
      <div>{messages}</div>
      <div>{count}</div>
    </div>
  );
}

export default App;

//大事なポイント！それぞれの状態をもっていないといけないよ！！
//入力中　→ input
//保存するもの　→ messages
