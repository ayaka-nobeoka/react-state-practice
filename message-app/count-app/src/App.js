import "./App.css";
import { useState } from "react";
import CounterButton from "./CounterButton";
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
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
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
