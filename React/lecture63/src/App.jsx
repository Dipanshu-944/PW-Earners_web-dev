import React, { useEffect, useState } from "react";

function Timer() {

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Timer")
    }, 1000);

    return function () {
      console.log("cleanup function");
      clearInterval(id)
    };

  }, [])

  return (
    <div>
      <h2>Timer component</h2>
    </div>
  );
}

function App() {
  const [productCount, setProductCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [showTimer, setShowTimer] = useState(true);

  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setProductCount(data.total);
  //     // setProduct(data.products)
  //   });

  // 1st useEffect case

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProductCount(data.total);
  //       setProduct(data.products)
  //     });
  // });

  // 2nd useEffect case

  //   useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProductCount(data.total);
  //       setProduct(data.products)
  //     });
  // }, []);

  // 3rd case

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProductCount(data.total);
  //       setProduct(data.products)
  //     });
  // }, [name]);

  // async await function
  useEffect(() => {
    async function getProducts() {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data);
      setProductCount(data.total);
      setProduct(data.products);
    }

    getProducts();

    console.log("anything");

    // cleanup function 
    return function () {
      console.log("cleanup function");
    };

  }, [name]);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer((prev) => !prev)}>Show Timer Component</button>
      <br />
      Product - {productCount}
      <input type="text" onInput={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <ul>
        {/* {product.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
