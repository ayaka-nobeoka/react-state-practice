import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); //初期値は０
  //useState で「数を覚える箱」を作る（stateという）👆

  const handleClick = () => {
    setCount(count + 1); //　新しい値に更新すると再レンダリングされる
  };
  //ボタンを押すとcountを更新する関数👆

  return (
    <div>
      <h2>カウントアップアプリ</h2>
      <p>現在のカウント: {count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default Counter;

// useState(0) 数を記憶する「state」を使う。最初は 0 からスタート
// count 現在の数（表示される値）
// setCount 数を変えるための関数（更新すると画面も再描画される）
// onClick={handleClick} クリックイベントで関数を実行する
