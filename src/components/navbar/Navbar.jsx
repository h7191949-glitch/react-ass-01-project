
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("search") || "");

  useEffect(() => {
    setSearchText(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchText.trim();

    if (query) {
      navigate(`/?search=${encodeURIComponent(query)}`);
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-logo">
        <h1>SHOP.CO</h1>
      </Link>

      <div>
        <ul className="nav-links">
          <li><Link to="/categorycarts">Shop ↓</Link></li>
          <li><a href="/#sale">On Sale</a></li>
          <li><a href="/#new-arrivals">New Arrivals</a></li>
          <li><a href="/#brands">Brands</a></li>
          <li><Link to="/checkout">Carts</Link></li>
        </ul>
      </div>

      <form className="nav-search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          type="submit"
          className="nav-search-submit"
          aria-label="Search products"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className="nav-icons">
        <Link to="/checkout" aria-label="Shopping cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link to="/signup" aria-label="User account">
          <i className="fa-regular fa-circle-user"></i>
        </Link>
      </div>
    </nav>
  );
}
