import "./App.css";
import { useState } from "react";
import CounterButton from "./CounterButton";
//ボタンを押すたびに数字が増える

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount(count + 1);
  };
  const handelMinus = () => {
    setCount(count - 1);
  };
  const handelSubmit = () => {
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
      <div>{input}</div>
      <div>{count}</div>
    </div>
  );
}

export default App;
