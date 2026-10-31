import React, { useState } from "react";

function Count() {
  let [value, setValue] = useState(0);

  function increment() {
    // count++;
    setValue((prev) => prev + 1)
  }

  function decrement() {
    // count--;
    setValue((prev) => prev - 1)
  }
  return (
    <div>
      <h1>counter</h1>
     <button onClick={increment}>+</button>
     <p>{value}</p>
     <button onClick={decrement}>-</button>
    </div>
  );
}

export default Count;
