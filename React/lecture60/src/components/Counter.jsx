import { useState } from "react";

function Counter({ counterPrint }) {

    // const res = useState()
    // const value = res[0];
    // const setValue = res[1];
    // OR

    // it is destructuring array 
    let [value , setValue] = useState(0)
    // value is current value, setValue is function to update, (0) is initial value 
    
    // let count = 0

    function increment() {
        // count++;
        // setValue(value++)
        // setValue(value + 1)
        // setValue(value + 1)

        setValue((prev) => prev + 1)
        // setValue((prev) => prev + 1) +2 
        // its dynamic not fixed 

        counterPrint(value)
    }
    function decrement() {
        // count--;
        // setValue(value--)
        setValue((prev) => prev - 1)
    }

  return (
    <div>
        <h1>Counter</h1>

        <button onClick={increment}>+</button>
        <p>{value}</p>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter