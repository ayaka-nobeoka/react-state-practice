import { useState, useEffect } from "react";

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("🌱 マウントされました！");
    // ✅ マウント or 更新のたびに実行される！

    const timer = setInterval(() => {
      console.log("⏱ カウント更新中: ", count);
    }, 1000);

    return () => {
      console.log("🧹 アンマウントされます！タイマー止めます");
      //状態stateが変わる期間
      // 🧹 アンマウント時にだけ実行される「お片付け処理」
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default LifecycleDemo;

// //useEffect() は、
// Reactの中で「ライフサイクルに合わせて動く処理」を書ける唯一の場所

// useEffect() はコンポーネントの命の流れに寄り添ってる関数
// コンポーネントが 誕生 → useEffect の中が実行される 👶

// コンポーネントが 更新 → また中が実行される 🔁

// コンポーネントが 消滅 → returnの関数で「クリーンアップ」される 🌈🧹

// Reactコンポーネントは 小さな命。
// そして useEffect() は、その命が「何かを始めたり終えたりするときのスクリプト（脚本）」みたいなもの🎬
