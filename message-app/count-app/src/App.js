import "./App.css";
import { useState } from "react";
//ボタンを押すたびに数字が増える

function App() {
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount(count + 1);
  };
  const handelMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <button onClick={handelClick}>➕</button>
      <button onClick={handelMinus}>➖</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
