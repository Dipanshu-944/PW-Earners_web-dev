import { Product } from "./product";

function Products({ products }) {
  // console.log(products)

  return (
    <div style={{ backgroundColor: "white", color: "green" }}>
      {products.map((product, i) => {
        // console.log(product);
        // return <Product key={i} product={product}/>
        return (
          <article key={i}>
            <p>{product.title}</p>
            <p>₹{product.price}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Products;
