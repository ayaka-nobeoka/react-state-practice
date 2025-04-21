function CounterButton({ onIncrement, onDecrease }) {
  return (
    <div>
      <button onClick={onIncrement}>＋</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default CounterButton;
