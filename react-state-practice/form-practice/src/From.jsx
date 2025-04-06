import { useState } from "react";

function From() {
  const [inputValue, setInputValue] = useState(""); // 入力中の文字
  const [submittedName, setSubmittedName] = useState(""); // 送信後の表示名

  const handleSubmit = (e) => {
    e.preventDefault(); // ページのリロード防止
    setSubmittedName(inputValue); // 現在の入力値を submittedName にコピー！
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="お名前入力"
          value={inputValue}
          onChange={handleInput}
        ></input>
        <button type="submit">送信</button>
      </form>
      {submittedName ? (
        <div>こんにちは、{submittedName}さん！</div>
      ) : (
        <div>お名前を入力してください</div>
      )}
    </>
  );
}

export default From;

//ポイントは「状態を2つに分ける」こと！

//💬 迷った時の合言葉
// 🧠 「リアルタイムに変化するのが inputValue」
// 🧠 「確定したら submittedName に移す」
