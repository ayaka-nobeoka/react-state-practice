import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <div>
      <h1>React 練習中 🧠</h1>
      <Counter start={5} />
      <Counter start={2} />
    </div>
  );
}

export default App;

//  これで親から start を渡す → 子でその値からカウントが始まります！
