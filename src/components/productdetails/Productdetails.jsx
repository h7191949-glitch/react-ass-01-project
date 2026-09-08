import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../../components/data/productsd";
import "../../components/productdetails/ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => String(item.id) === String(productId)
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("reviews");

  if (!product) {
    console.warn(
      `Product not found for productId="${productId}". ` +
      `Check that this id exists in productsd.js.`
    );

    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>

        <Link to="/">
          Back to Home
        </Link>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Adds the current product to the cart in localStorage.
  // This REPLACES whatever cart was previously stored, so the
  // checkout page only ever shows the most recently added product.
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      size: selectedSize,
      color: product.colors[selectedColor]?.name || "",
      price: product.price,
      image: product.images[0],
      quantity,
    };

    try {
      localStorage.setItem("cart", JSON.stringify([cartItem]));
    } catch (err) {
      console.error("Could not save cart to localStorage:", err);
    }

    navigate("/checkout");
  };

  const discountPct = product.originalPrice
    ? Math.round(100 - (product.price / product.originalPrice) * 100)
    : null;

  return (
    <section className="product-details-page">


      <div className="product-breadcrumb">
        {product.breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb}>
            {index > 0 && <span>›</span>}
            {index === 0 ? (
              <Link to="/">{crumb}</Link>
            ) : (
              <span>{crumb}</span>
            )}
          </React.Fragment>
        ))}
      </div>



      <div className="product-main">


        <div className="product-gallery">

          <div className="product-thumbnails">

            {product.images.map((image, index) => (
              <button
                key={index}
                className={
                  selectedImage === index
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={product.name}
                />
              </button>
            ))}

          </div>


          <div className="main-product-image">

            <img
              src={product.images[selectedImage]}
              alt={product.name}
            />

          </div>

        </div>


        <div className="product-info">

          <h1>{product.name}</h1>


          <div className="product-rating">

            <span className="stars">
              ★★★★★
            </span>

            <span>
              {product.rating}/5
            </span>

            <span className="review-count">
              ({product.ratingCount} Reviews)
            </span>

          </div>



          <div className="product-detail-price">

            <strong>
              ${product.price}
            </strong>

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



          <div className="color-section">

            <p>Select Colors</p>

            <div className="color-options">

              {product.colors.map((color, index) => (

                <button
                  key={color.name}
                  className={
                    selectedColor === index
                      ? "color-option selected"
                      : "color-option"
                  }
                  style={{
                    backgroundColor: color.hex,
                  }}
                  onClick={() =>
                    setSelectedColor(index)
                  }
                  aria-label={color.name}
                >
                  {selectedColor === index && "✓"}
                </button>

              ))}

            </div>

          </div>



          <div className="size-section">

            <p>Choose Size</p>

            <div className="size-options">

              {product.sizes.map((size) => (

                <button
                  key={size}
                  className={
                    selectedSize === size
                      ? "size-btn selected"
                      : "size-btn"
                  }
                  onClick={() =>
                    setSelectedSize(size)
                  }
                >
                  {size}
                </button>

              ))}

            </div>

          </div>


          <div className="cart-action">

            <div className="quantity-control">

              <button
                onClick={decreaseQuantity}
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={increaseQuantity}
              >
                +
              </button>

            </div>


            <button className="add-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>

          </div>

        </div>

      </div>



      <div className="product-tabs">

        <button
          className={
            activeTab === "details"
              ? "tab active"
              : "tab"
          }
          onClick={() =>
            setActiveTab("details")
          }
        >
          Product Details
        </button>


        <button
          className={
            activeTab === "reviews"
              ? "tab active"
              : "tab"
          }
          onClick={() =>
            setActiveTab("reviews")
          }
        >
          Rating & Reviews
        </button>


        <button
          className={
            activeTab === "faq"
              ? "tab active"
              : "tab"
          }
          onClick={() =>
            setActiveTab("faq")
          }
        >
          FAQ
        </button>

      </div>



      {activeTab === "reviews" && (

        <div className="reviews-section">

          <div className="reviews-heading">

            <h2>
              All Reviews
              <span>
                ({product.ratingCount})
              </span>
            </h2>

            <button>
              Write a Review
            </button>

          </div>


          <div className="reviews-grid">

            {product.reviews.map((review) => (

              <div
                className="review-card"
                key={review.id}
              >

                <div className="review-stars">
                  {"★".repeat(review.rating)}
                </div>


                <h3>
                  {review.name}
                  <span>✓</span>
                </h3>


                <p>
                  "{review.text}"
                </p>


                <small>
                  Posted on {review.date}
                </small>

              </div>

            ))}

          </div>


          <button className="load-reviews">
            Load More Reviews
          </button>

        </div>

      )}



      {activeTab === "details" && (

        <div className="tab-content">

          <h2>Product Details</h2>

          <p>
            {product.description}
          </p>

          <p>
            Available sizes:{" "}
            {product.sizes.join(", ")}
          </p>

        </div>

      )}


      {activeTab === "faq" && (

        <div className="tab-content">

          <h2>Frequently Asked Questions</h2>

          <h3>
            What sizes are available?
          </h3>

          <p>
            This product is available in{" "}
            {product.sizes.join(", ")}.
          </p>

          <h3>
            Is this product available in different colors?
          </h3>

          <p>
            Yes, this product is available in
            multiple colors.
          </p>

        </div>

      )}

    </section>
  );
}

export default ProductDetails;