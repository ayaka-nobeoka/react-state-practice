import React from "react";
import { useEffect } from "react";

function TodoItem({ item, onDelete, onComplete }) {
  useEffect(() => {
    console.log(`🌟 マウントされました: ${item.text}`);
    return () => {
      console.log(`🧹 アンマウントされました: ${item.text}`);
    };
  }, [item]);
  return (
    <div>
      <li>
        🐻 {item.text}
        <button onClick={() => onDelete(item.id)}>削除</button>
        <button onClick={() => onComplete(item.id)}>完了</button>
      </li>
    </div>
  );
}

export default TodoItem;
