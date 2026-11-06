import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import staticProducts from "../../components/data/productsd";
import "../../components/productdetails/ProductDetails.css";

const API_URL = "http://https://e-commerce-back-end-hknq-git-main-acma18.vercel.app//api/products";

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("reviews");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${API_URL}/${productId}`);

        if (response.ok) {
          const data = await response.json();

          const formattedProduct = {
            id: data._id,
            name: data.name,
            category: data.category,
            images: [data.image || "📦"],
            rating: 0,
            ratingCount: 0,
            price: data.price,
            originalPrice: null,
            description: data.description || "",
            breadcrumbs: ["Home", data.category, data.name],
            colors: [],
            sizes: [],
            reviews: [],
            stock: data.stock,
            status: data.status,
          };

          setProduct(formattedProduct);
        } else {
          const staticProduct = staticProducts.find(
            (item) => String(item.id) === String(productId)
          );

          setProduct(staticProduct || null);
        }
      } catch (error) {
        console.error("Product fetch error:", error);

        const staticProduct = staticProducts.find(
          (item) => String(item.id) === String(productId)
        );

        setProduct(staticProduct || null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="product-not-found">
        <h2>Loading Product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const images = product.images?.length
    ? product.images
    : ["📦"];

  const colors = product.colors || [];
  const sizes = product.sizes || [];
  const reviews = product.reviews || [];

  const currentImage = images[selectedImage] || images[0];

  const isImage =
    currentImage.startsWith("/") ||
    currentImage.startsWith("http://") ||
    currentImage.startsWith("https://") ||
    currentImage.startsWith("data:");

  const increaseQuantity = () => {
    if (product.stock !== undefined && quantity >= product.stock) {
      alert("Available stock limit reached.");
      return;
    }

    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) =>
      previous > 1 ? previous - 1 : 1
    );
  };

  const handleAddToCart = () => {
    if (product.stock !== undefined && product.stock < 1) {
      alert("This product is currently out of stock.");
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      size: selectedSize,
      color: colors[selectedColor]?.name || "",
      price: product.price,
      image: images[0],
      quantity,
    };

    try {
      const existingCart = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      const cart = Array.isArray(existingCart)
        ? existingCart
        : [];

      const existingIndex = cart.findIndex(
        (item) =>
          String(item.id) === String(cartItem.id) &&
          item.size === cartItem.size &&
          item.color === cartItem.color
      );

      if (existingIndex !== -1) {
        cart[existingIndex].quantity += quantity;
      } else {
        cart.push(cartItem);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save cart:", error);
      alert("Cart save nahi ho saka.");
      return;
    }

    navigate("/checkout");
  };

  const discountPct =
    product.originalPrice &&
    product.originalPrice > product.price
      ? Math.round(
          100 - (product.price / product.originalPrice) * 100
        )
      : null;

  return (
    <section className="product-details-page">

      <div className="product-breadcrumb">
        {(product.breadcrumbs || ["Home", product.name]).map(
          (crumb, index) => (
            <React.Fragment key={`${crumb}-${index}`}>
              {index > 0 && <span>›</span>}

              {index === 0 ? (
                <Link to="/">{crumb}</Link>
              ) : (
                <span>{crumb}</span>
              )}
            </React.Fragment>
          )
        )}
      </div>

      <div className="product-main">

        <div className="product-gallery">

          <div className="product-thumbnails">
            {images.map((image, index) => {
              const imageIsFile =
                image.startsWith("/") ||
                image.startsWith("http://") ||
                image.startsWith("https://") ||
                image.startsWith("data:");

              return (
                <button
                  key={index}
                  className={
                    selectedImage === index
                      ? "thumbnail active"
                      : "thumbnail"
                  }
                  onClick={() => setSelectedImage(index)}
                >
                  {imageIsFile ? (
                    <img src={image} alt={product.name} />
                  ) : (
                    <span style={{ fontSize: "35px" }}>
                      {image}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="main-product-image">
            {isImage ? (
              <img src={currentImage} alt={product.name} />
            ) : (
              <span style={{ fontSize: "120px" }}>
                {currentImage}
              </span>
            )}
          </div>

        </div>

        <div className="product-info">

          <h1>{product.name}</h1>

          <div className="product-rating">
            <span className="stars">
              {product.rating > 0 ? "★★★★★" : ""}
            </span>

            {product.rating > 0 && (
              <>
                <span>{product.rating}/5</span>

                <span className="review-count">
                  ({product.ratingCount} Reviews)
                </span>
              </>
            )}
          </div>

          <div className="product-detail-price">
            <strong>${product.price}</strong>

            {product.originalPrice && (
              <span className="product-old-price">
                ${product.originalPrice}
              </span>
            )}

            {discountPct !== null && (
              <span className="product-discount">
                -{discountPct}%
              </span>
            )}
          </div>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-line"></div>

          {colors.length > 0 && (
            <div className="color-section">
              <p>Select Colors</p>

              <div className="color-options">
                {colors.map((color, index) => (
                  <button
                    key={color.name}
                    className={
                      selectedColor === index
                        ? "color-option selected"
                        : "color-option"
                    }
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(index)}
                    aria-label={color.name}
                  >
                    {selectedColor === index && "✓"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {sizes.length > 0 && (
            <div className="size-section">
              <p>Choose Size</p>

              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={
                      selectedSize === size
                        ? "size-btn selected"
                        : "size-btn"
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.stock !== undefined && (
            <p>
              {product.stock > 0
                ? `${product.stock} items available`
                : "Out of Stock"}
            </p>
          )}

          <div className="cart-action">

            <div className="quantity-control">
              <button onClick={decreaseQuantity}>−</button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>+</button>
            </div>

            <button
              className="add-cart-btn"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>

          </div>

        </div>
      </div>

      <div className="product-tabs">

        <button
          className={activeTab === "details" ? "tab active" : "tab"}
          onClick={() => setActiveTab("details")}
        >
          Product Details
        </button>

        <button
          className={activeTab === "reviews" ? "tab active" : "tab"}
          onClick={() => setActiveTab("reviews")}
        >
          Rating & Reviews
        </button>

        <button
          className={activeTab === "faq" ? "tab active" : "tab"}
          onClick={() => setActiveTab("faq")}
        >
          FAQ
        </button>

      </div>

      {activeTab === "reviews" && (
        <div className="reviews-section">

          <div className="reviews-heading">
            <h2>
              All Reviews
              <span>({product.ratingCount || 0})</span>
            </h2>

            <button>Write a Review</button>
          </div>

          <div className="reviews-grid">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div className="review-card" key={review.id}>
                  <div className="review-stars">
                    {"★".repeat(review.rating)}
                  </div>

                  <h3>
                    {review.name}
                    <span>✓</span>
                  </h3>

                  <p>"{review.text}"</p>

                  <small>Posted on {review.date}</small>
                </div>
              ))
            ) : (
              <p>No reviews available yet.</p>
            )}
          </div>

          {reviews.length > 0 && (
            <button className="load-reviews">
              Load More Reviews
            </button>
          )}

        </div>
      )}

      {activeTab === "details" && (
        <div className="tab-content">
          <h2>Product Details</h2>

          <p>{product.description}</p>

          {sizes.length > 0 && (
            <p>
              Available sizes: {sizes.join(", ")}
            </p>
          )}
        </div>
      )}

      {activeTab === "faq" && (
        <div className="tab-content">
          <h2>Frequently Asked Questions</h2>

          <h3>What sizes are available?</h3>

          <p>
            {sizes.length > 0
              ? `This product is available in ${sizes.join(", ")}.`
              : "Size options are not available for this product."}
          </p>

          <h3>Is this product available in different colors?</h3>

          <p>
            {colors.length > 0
              ? "Yes, this product is available in multiple colors."
              : "Color options are not available for this product."}
          </p>
        </div>
      )}

    </section>
  );
}

export default ProductDetails;
