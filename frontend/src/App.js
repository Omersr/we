import data from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Amazona</a>
      </header>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <img src={product.image} alt={product.name}></img>
            <div className="product-info">
              <a href={`/products/${product.slug}`}>
                <p>{product.name}</p>
              </a>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
