import React, { useState } from "react";
import { Link } from "react-router-dom";
import allProducts from "../../components/data/productsd";
import "./categoryCarts.css";

const products = allProducts.filter((p) => p.category === "casual");

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const colors = [
  "#22C55E",
  "#EF4444",
  "#EAB308",
  "#3B82F6",
  "#F97316",
  "#0D9488",
  "#6366F1",
  "#8B5CF6",
  "#EC4899",
  "#FFFFFF",
  "#111111",
];

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

const dressStyles = ["Casual", "Formal", "Party", "Gym"];

function Star({ filled }) {
  return (
    <svg
      className={`star ${filled ? "star--filled" : "star--empty"}`}
      viewBox="0 0 20 20"
      width="14"
      height="14"
    >
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
    </svg>
  );
}

function Rating({ value }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= Math.round(value)} />
      ))}
      <span className="rating__value">{value.toFixed(1)}/5</span>
    </div>
  );
}

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="filter-section">
      <button className="filter-section__header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <svg
          className={`chevron ${open ? "chevron--open" : ""}`}
          viewBox="0 0 20 20"
          width="16"
          height="16"
        >
          <path
            d="M6 8l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && <div className="filter-section__body">{children}</div>}
    </div>
  );
}

export default function CasualPage() {
  const [price, setPrice] = useState(100);
  const [selectedColor, setSelectedColor] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [page, setPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="casual-page">
      <div className="breadcrumb">
        <span>Home</span>
        <span className="breadcrumb__sep">/</span>
        <span className="breadcrumb__current">Casual</span>
      </div>

      <div className="casual-layout">
        <aside className="sidebar">
          <div className="sidebar__title">
            Filters
            <svg viewBox="0 0 20 20" width="16" height="16">
              <path
                d="M3 5h14M6 10h8M9 15h2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="category-list">
            {categories.map((cat) => (
              <button className="category-list__item" key={cat}>
                <span>{cat}</span>
                <svg viewBox="0 0 20 20" width="14" height="14">
                  <path
                    d="M7.5 4.5l5 5.5-5 5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>

          <hr className="divider" />

          <FilterSection title="Price">
            <input
              type="range"
              min="0"
              max="250"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="price-slider"
            />
            <div className="price-range">
              <span>${Math.max(0, price - 50)}</span>
              <span>${price + 100}</span>
            </div>
          </FilterSection>

          <hr className="divider" />

          <FilterSection title="Colors">
            <div className="color-grid">
              {colors.map((c, i) => (
                <button
                  key={i}
                  className={`color-swatch ${
                    selectedColor === i ? "color-swatch--selected" : ""
                  } ${c === "#FFFFFF" ? "color-swatch--white" : ""}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setSelectedColor(i)}
                  aria-label={`color-${i}`}
                >
                  {selectedColor === i && (
                    <svg viewBox="0 0 20 20" width="12" height="12">
                      <path
                        d="M4 10l4 4 8-8"
                        fill="none"
                        stroke={c === "#FFFFFF" ? "#111" : "#fff"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </FilterSection>

          <hr className="divider" />

          <FilterSection title="Size">
            <div className="size-grid">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={`size-pill ${
                    selectedSize === s ? "size-pill--selected" : ""
                  }`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </FilterSection>

          <hr className="divider" />

          <FilterSection title="Dress Style">
            <div className="category-list">
              {dressStyles.map((style) => (
                <button className="category-list__item" key={style}>
                  <span>{style}</span>
                  <svg viewBox="0 0 20 20" width="14" height="14">
                    <path
                      d="M7.5 4.5l5 5.5-5 5.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </FilterSection>

          <button className="apply-btn">Apply Filter</button>
        </aside>


        <main className="content">
          <div className="content__header">
            <h1>Casual</h1>
            <div className="content__meta">
              <span>Showing 1-{products.length} of 100 Products</span>
              <span className="sort">
                Sort by: <strong>Most Popular</strong>
                <svg viewBox="0 0 20 20" width="14" height="14">
                  <path
                    d="M6 8l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="product-grid">
            {products.map((p) => {
              const discountPct = p.originalPrice
                ? Math.round(100 - (p.price / p.originalPrice) * 100)
                : null;

              return (
                <Link
                  to={`/product/${p.id}`}
                  className="product-card"
                  key={p.id}
                >
                  <div className="product-card__image">
                    <img src={p.images[0]} alt={p.name} loading="lazy" />
                  </div>
                  <h3 className="product-card__name">{p.name}</h3>
                  <Rating value={p.rating} />
                  <div className="product-card__price">
                    <span className="price">${p.price}</span>
                    {p.originalPrice && (
                      <span className="price price--old">
                        ${p.originalPrice}
                      </span>
                    )}
                    {discountPct !== null && (
                      <span className="badge-discount">-{discountPct}%</span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="pagination">
            <button
              className="pagination__nav"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              ← Previous
            </button>
            <div className="pagination__pages">
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`pagination__page ${
                    page === n ? "pagination__page--active" : ""
                  }`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
              <span className="pagination__ellipsis">...</span>
              {[8, 9, 10].map((n) => (
                <button
                  key={n}
                  className={`pagination__page ${
                    page === n ? "pagination__page--active" : ""
                  }`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              className="pagination__nav"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}