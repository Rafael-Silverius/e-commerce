import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";

export default function Home() {
  const products = getProducts();
  return (
    <div>
      <div className="home-hero">
        <h2 className="home-title">Welcome to Shopify</h2>
        <p className="home-subtitle">Discover products at great prices</p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
