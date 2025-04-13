import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>カウンターアプリ</h1>
        <div className="counter">
          <p>現在の値: {count}</p>
          <div className="buttons">
            <button onClick={decrement}>-</button>
            <button onClick={reset}>リセット</button>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
