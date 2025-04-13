import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  //input → 今の入力値（ユーザーが書いた内容）
  //setInput → 入力値を更新する関数
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  const handleDelete = () => {};

  return (
    <div>
      <input type="text" value={input} onChange={handleChange}></input>
      {/* 🎀 各記述の意味と役割
　　　　✨ value={input}
　　　　これは **「この入力欄の中の表示は、Reactの状態（input）で決めます」**という意味。
　　　　つまり、見た目（DOM）を state がコントロールしてるということ。
　　　　✨ onChange={handleChange}
　　　　入力欄に何か変化があったら（文字が入力されたら）、

　　　　handleChange を呼んで、Reactの状態（input）を更新する。 */}
      <button onClick={handleAdd}>追加</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            🐻 {item}
            <button onClick={handleDelete}>削除</button>
            <button>完了</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// 2つ目の setItems("") はいらないので 削除してOKです！
// これがあると「配列」だった items が「文字列」になってしまってバグります💦
