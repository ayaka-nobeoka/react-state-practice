import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    const newItem = {
      id: uuidv4(), // ⭐️ ここで毎回ユニークなIDが作られる！
      text: input,
      completed: true,
    };
    setItems([...items, newItem]);
    setInput("");
  };
  //これで items は👉 { id: 数字, text: "入力されたテキスト" } という形でデータが入る！
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleComplete = (id) => {
    const newTask = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true }; // ✅ このitemだけcompletedをtrueに
      }
      return item; // ✅ 他はそのまま返す
    });
    setItems(newTask);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange}></input>
      {/* 🎀 各記述の意味と役割
　　　　✨ value={input}
　　　　これは **「この入力欄の中の表示は、Reactの状態（input）で決めます」**という意味。
　　　　つまり、見た目（DOM）を state がコントロールしてるということ。
　　　　✨ onChange={handleChange}å
　　　　入力欄に何か変化があったら（文字が入力されたら）、

　　　　handleChange を呼んで、Reactの状態（input）を更新する。 */}
      <button onClick={handleAdd}>追加</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            🐻 {item.text}
            <button onClick={() => handleDelete(item.id)}>削除</button>
            <button onClick={() => handleComplete(item.id)}>完了</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
//item.text を表示するようにする！
//handleDelete は無名関数で呼び出す！（onClick={() => handleDelete(item.id)} ←これ重要！）
export default App;

// 2つ目の setItems("") はいらないので 削除してOKです！
// これがあると「配列」だった items が「文字列」になってしまってバグります💦
