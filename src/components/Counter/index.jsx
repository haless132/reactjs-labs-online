import React, { useState } from 'react';
import './Counter.scss';

Counter.propTypes = {};

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  // phần tử đầu tiên là giá trị state
  //   phần tử 2 lá hàm giúp thay đổi state

  const handleDecreaseClick = () => {
    setCount((x) => x - 1);
  };
  const handleIncreaseClick = () => {
    setCount((x) => x + 1);
  };

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <button onClick={handleIncreaseClick}>Increase</button>
    </div>
  );
}

export default Counter;
