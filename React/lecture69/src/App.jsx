import React, { useCallback, useMemo, useState } from "react";
import Child from "./components/Child";
import ChildComponent from "./components/Child";

// time taking task but always re-render when clicked in click button
function calculateTotal() {
  let sum = 0;
  for (let i = 0; i < 10000000; i++) {
    sum += i;
  }
  return sum;
}
// useMemo hook
function App() {
  const [count, setCount] = useState(0);

  const value = useMemo(() => {
    console.log("use memo")
    return calculateTotal();
  }, []);

  // re create on every re-render with new refernce
  // function printHello() {
  //   console.log("hii hello g");
  // }

  const memoziedPrintHello = useCallback(() => {
      console.log("hii hello g");
  }, []);

  let obj = {
    count: 50,
    printHello: memoziedPrintHello,
  };

  return (
    <div>
      <p>value : {count}</p>
      <button onClick={() => setCount((p) => p + 1)}>Click here</button>
      <p>Total sum : {value}</p>
      {/* <p>total sum: {value}</p> */}
      {/* <Child /> */}
      <ChildComponent {...obj} />
    </div>
  );
}

export default App;
