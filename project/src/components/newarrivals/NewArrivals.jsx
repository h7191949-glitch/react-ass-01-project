import React from "react";
import { Link } from "react-router-dom";
import "./NewArrivals.css";

function ProductCard({ product }) {
  const discountPct =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          100 - (product.price / product.originalPrice) * 100
        )
      : null;

  const productImage = product.images?.[0] || "";

  const isImage =
    productImage.startsWith("/") ||
    productImage.startsWith("http://") ||
    productImage.startsWith("https://") ||
    productImage.startsWith("data:");

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card"
    >
      <div className="product-img">
        {isImage ? (
          <img src={productImage} alt={product.name} />
        ) : (
          <span
            style={{
              fontSize: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {productImage || "📦"}
          </span>
        )}
      </div>

      <h3>{product.name}</h3>

      <div className="product-rating">
        <span className="stars">
          {product.rating > 0 ? "★★★★★" : ""}
        </span>

        {product.rating > 0 && (
          <span className="rating-number">
            {product.rating}/5
          </span>
        )}
      </div>

      <div className="product-price">
        <span className="current-price">
          ${product.price}
        </span>

        {product.originalPrice > product.price && (
          <span className="old-price">
            ${product.originalPrice}
          </span>
        )}

        {discountPct !== null && (
          <span className="discount">
            -{discountPct}%
          </span>
        )}
      </div>
    </Link>
  );
}

export default function NewArrivals({
  title,
  products = [],
  viewAllLink = "#",
}) {
  return (
    <section className="new-arrivals">
      <h2>{title}</h2>

      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </section>
  );
}
