import { useState } from "react";

const FibonacciCounter = () => {
  const [previous, setPrevious] = useState(0);
  const [current, setCurrent] = useState(0);

  const calculateNextFibonacci = () => {
    if (current === 0) {
      return 1;
    }

    return previous + current;
  };

  const handleClick = () => {
    const next = calculateNextFibonacci();

    setPrevious(current);
    setCurrent(next);
  };

  return (
    <div className="fibonacci-container">
      <div className="fibonacci-card">
        <h1>Fibonacci Counter</h1>

        <div className="fibonacci-number">
          {current}
        </div>

        <button onClick={handleClick}>
          Next Fibonacci
        </button>
      </div>
    </div>
  );
};

export default FibonacciCounter;