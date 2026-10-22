import "./App.css";
import Counter from "./components/Counter"
import Todo from "./components/Todo";


function counterPrint(value){
  console.log(value)
}

function App() {
  return (
    <>
    {/* <Counter counterPrint={counterPrint}/> */}

    <Todo/>
   
  </>)
}

export default App;
