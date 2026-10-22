import "./App.css";
import Footer234, { Footer as Footerupdate } from "./Components/Footer"; //named import {}
import Navbar from "./Components/Navbar"; // default export
import Products from "./Components/Products";

const User = {
  name: "dipanshu",
  isLoggedIn: true,
}

const products = [
  {
    title: "Shoes",
    price: 40000,
  },
  {
    title: "Mobile",
    price: 50000,
  },
  {
    title: "Shirt",
    price: 10000,
  },
];

function App() {
  return (
    <div>
      <Navbar user={User}/>
      <Products products={products}/>
      <Footer234 />
      <Footerupdate />
    </div>
  );
}
export default App;
