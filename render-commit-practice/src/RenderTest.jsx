import { useState, useEffect } from "react";

function RenderTest() {
  const [count, setCount] = useState(0);
  console.log("'🧠 レンダーされました！'");

  useEffect(() => {
    console.log("✨ useEffectが呼ばれました！（＝DOM反映後）");
  });
  //   const handleClick = () => {
  //     // setCount(count); にするとレンダーされるけど値が変わらない！
  //     setCount(count + 1); // 実験用：あえて同じ値をセット
  //   };
  return (
    <div>
      <h2>🐻 カウント: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default RenderTest;

//「React は setCount() が呼ばれたこと自体は知ってるけど、変更がないからログも再レンダーも無視する」
// 👉 つまり 「裏では動いてるけど、表には出てない」！！💡
