import React from "react";
import { Link } from "react-router-dom";
import "./NewArrivals.css";


function ProductCard({ product }) {
  const discountPct = product.originalPrice
    ? Math.round(100 - (product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link to={`/product/${product.id}`} className="product-card">

      <div className="product-img">
        <img src={product.images[0]} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <div className="product-rating">
        <span className="stars">★★★★★</span>
        <span className="rating-number">{product.rating}/5</span>
      </div>

      <div className="product-price">
        <span className="current-price">${product.price}</span>

        {product.originalPrice && (
          <span className="old-price">${product.originalPrice}</span>
        )}

        {discountPct !== null && (
          <span className="discount">-{discountPct}%</span>
        )}
      </div>

    </Link>
  );
}

export default function NewArrivals({ title, products, viewAllLink = "#" }) {
  return (
    <section className="new-arrivals">

      <h2>{title}</h2>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}