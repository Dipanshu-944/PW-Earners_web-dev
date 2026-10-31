import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Outlet, Link, useParams } from "react-router";
import NotFoundPage from "./assets/components/NotFoundPage";
import Login from "./assets/components/Login";
import Dashboard from "./assets/components/Dashboard";

const products = [
  {
    id: 1,
    title: "Laptop",
  },
  {
    id: 2,
    title: "mobile",
  },
];
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        {products.map((p) => (
          <section>
            <Link to={`/product-page/${p.id}`}>{p.title}</Link>
          </section>
        ))}
      </div>
    </div>
  );
}

function ProductPage() {
  // const params = useParams();
  const { id } = useParams();

  // console.log(params);
  const data = products.find((p) => p.id === Number(id));
  return (
    <div>
      <h1>Product-Page</h1>
      {data ? <p>{data.title}</p> : "No product found"}
    </div>
  );
}

function AboutUs() {
  return <h1>About page</h1>;
}

function Navbar() {
  return (
    <>
      <ul>
        <Link to={"/"}>Home page</Link>
        <br />
        <Link to={"/product-page/1"}>Product page</Link>
        <br />
        <Link to={"/about-us"}>About page</Link>
        <br />
        <Link to={"/login"}>Login</Link>
        <br />
        <a href="/contact-us">Contact us</a>
      </ul>

      <Outlet />
    </>
  );
}

/* 
   <ul>
    <li onClick={() => setPage("home")}>Home page</li>
    <li onClick={() => setPage("productPage")}>Product page</li>
    <li onClick={() => setPage("aboutUs")}>About page</li>
   </ul> 
   {page == "home" && <Home />}
   {page == "productPage" && <ProductPage />}
   {page == "aboutUs" && <AboutUs />}
   */

function App() {
  const [page, setPage] = useState("home");
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/contact-us" element={<h1>Contact us page</h1>} />

      <Route path="*" element={<NotFoundPage />} />
      {/* fallback path/route "*" it show when path is wrong  */}
    </Routes>
  );
}

export default App;
