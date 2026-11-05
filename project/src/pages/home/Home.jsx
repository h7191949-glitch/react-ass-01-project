
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Announcement from "../../components/announcement/announcement";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/herosection/Hero";
import NewArrivals from "../../components/newarrivals/NewArrivals";
import DressStyle from "../../components/dressStyle/DressStyle";
import HappyCustomers from "../../components/customer/Customer";
import LastestOffer from "../../components/lastestoffer/LatestOffer";
import Footer from "../../components/footer/Footer";

const API_URL = "http://localhost:5000/api/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Products load nahi huay");
        }

        const data = await response.json();

        const formattedProducts = data
          .filter((product) => product.status === "Active")
          .map((product) => ({
            id: product._id,
            name: product.name,
            category: product.category || "",
            images: [product.image || "📦"],
            rating: product.rating || 0,
            ratingCount: product.ratingCount || 0,
            price: product.price,
            originalPrice: product.originalPrice || null,
            description: product.description || "",
            breadcrumbs: ["Home", product.category, product.name],
            colors: product.colors || [],
            sizes: product.sizes || [],
            reviews: product.reviews || [],
            stock: product.stock,
            isNewArrival: product.isNewArrival === true,
          }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Products error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const newArrivalProducts = products.filter(
    (product) => product.isNewArrival
  );

  const topSellingProducts = products.filter(
    (product) => product.category.toLowerCase() === "top-selling"
  );

  const categories = [
    ...new Set(
      products
        .map((product) => product.category)
        .filter(
          (category) => category.toLowerCase() !== "top-selling"
        )
    ),
  ];

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return false;

    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Announcement />
      <Navbar />

      {searchQuery.trim() ? (
        <section className="search-results-section">
          <h2>
            SEARCH RESULTS FOR "{searchQuery}"
          </h2>

          {loading ? (
            <p>Loading products...</p>
          ) : filteredProducts.length > 0 ? (
            <NewArrivals
              title="MATCHING PRODUCTS"
              products={filteredProducts}
              maxProducts={null}
            />
          ) : (
            <div className="no-search-results">
              <h3>No products found</h3>
              <p>
                We couldn't find any products matching "{searchQuery}".
                Try another product name or category.
              </p>
            </div>
          )}
        </section>
      ) : (
        <>
          <Hero />

          <NewArrivals
            title="NEW ARRIVALS"
            products={newArrivalProducts}
            viewAllLink="/products?category=new-arrivals"
          />

          <NewArrivals
            title="TOP SELLING"
            products={topSellingProducts}
            viewAllLink="/products?category=top-selling"
          />

          {categories.map((category) => (
            <NewArrivals
              key={category}
              title={
                category.toLowerCase() === "new-arrivals"
                  ? "PREVIOUS COLLECTION"
                  : category.toUpperCase()
              }
              products={products.filter(
                (product) => product.category === category
              )}
              viewAllLink={`/products?category=${encodeURIComponent(category)}`}
            />
          ))}

          <DressStyle />
          <HappyCustomers />
        </>
      )}

      <LastestOffer />
      <Footer />
    </>
  );
}
