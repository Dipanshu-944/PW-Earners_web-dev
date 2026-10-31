import React, { memo } from "react";

// function Child() {
//     console.log("child re-render")
//   return (
//     <div>Child</div>
//   )
// }

// export default Child

// React.memo it will stop unnecessary re-render without changes (caches)
const ChildComponent = memo(({ printHello }) => {
  console.log("re-render childComponent");
  return (
    <div>
      <h1>ChildComponents</h1>
      <button onClick={printHello}>Print hello func</button>
    </div>
  );
});

export default ChildComponent;
