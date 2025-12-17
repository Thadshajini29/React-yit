import React, { useState } from 'react'

export default function counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {/* //----------------------handle functions with prevState----------------------// */}
      <h1>{count}</h1>
      <button onClick={() => {
        setCount((prevState) => {
          return prevState + 1;
        });
      }}>+
      </button>
      <button onClick={() => {
        setCount((prevState) => {
          return prevState - 1;
        });
      }}>
      -</button>


{/* //----------------------handle functions without prevState----------------------// */}
      {/* <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={()=>setCount(0)}>Reset</button> */}

    </div>
  )
}
