import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Announcement from "../../components/announcement/announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewArrivals from "../../components/newarrivals/NewArrivals";

const API_URL = "http://localhost:5000/api/products";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Products load nahi huay");

        const data = await response.json();
        const activeProducts = data
          .filter((product) => product.status === "Active")
          .map((product) => ({
            id: product._id || product.id,
            name: product.name,
            category: product.category || "",
            images: Array.isArray(product.images) && product.images.length
              ? product.images
              : [product.image || "📦"],
            rating: product.rating || 0,
            ratingCount: product.ratingCount || 0,
            price: product.price,
            originalPrice: product.originalPrice || null,
            isNewArrival: product.isNewArrival === true,
          }));

        setProducts(activeProducts);
      } catch (loadError) {
        console.error("Products error:", loadError);
        setError("Products load nahi huay. Backend check karein.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const visibleProducts = useMemo(() => {
    if (!category) return products;
    if (category.toLowerCase() === "new-arrivals") {
      return products.filter(
        (product) =>
          product.isNewArrival ||
          product.category.toLowerCase() === "new-arrivals"
      );
    }
    return products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }, [category, products]);

  const title = category
    ? category.replaceAll("-", " ").toUpperCase()
    : "ALL PRODUCTS";

  return (
    <>
      <Announcement />
      <Navbar />
      <main className="all-products-page">
        {loading ? (
          <p className="catalog-status">Loading products...</p>
        ) : error ? (
          <p className="catalog-status">{error}</p>
        ) : (
          <>
            <p className="catalog-count">{visibleProducts.length} products</p>
            <NewArrivals
              title={title}
              products={visibleProducts}
              maxProducts={null}
              showViewAll={false}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}