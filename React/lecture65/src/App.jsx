import { use, useContext, useState } from "react";
import "./App.css";
import { UserContext } from "./main";

// Prop drilling passing data through components to component to child of child
function GrandChild() {

  // const value = useContext(UserContext);
  const value = use(UserContext);

  console.log(value)

  return (
    <div style={{ backgroundColor: "gold", padding: "20px" }}>
      <h1>GrandChild - {value}</h1>
    </div>
  );
}

function Child() {
  return (
    <div style={{ backgroundColor: "purple", padding: "20px" }}>
      <h1> Child </h1>
      <GrandChild  />
    </div>
  );
}

function Parent() {
  return (
    <div style={{ backgroundColor: "brown", padding: "20px" }}>
      <h1> Parent </h1>
      <Child  />
    </div>
  );
}

function App() {

  return (
    <div style={{ backgroundColor: "teal", padding: "20px" }}>
      <h1> App </h1>
      <Parent />
    </div>
  );
}

export default App;
