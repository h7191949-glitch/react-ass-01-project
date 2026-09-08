import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CheckOut.css";

function getStoredCart() {
  try {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Could not read cart from localStorage:", err);
    return [];
  }
}

function Cart() {
  const [cartItems, setCartItems] = useState(getStoredCart);

  
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (err) {
      console.error("Could not save cart to localStorage:", err);
    }
  }, [cartItems]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };


  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = Math.round(subtotal * 0.2);

  const deliveryFee = cartItems.length > 0 ? 15 : 0;

  const total = subtotal - discount + deliveryFee;

  return (
    <section className="cart-page">


      <div className="cart-breadcrumb">
        <span>Home</span>
        <span>›</span>
        <span>Cart</span>
      </div>



      <h1 className="cart-title">
        YOUR CART
      </h1>


      <div className="cart-layout">


        <div className="cart-products">

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <Link to="/" className="continue-shopping-btn">
                Continue Shopping
              </Link>
            </div>
          ) : (

            cartItems.map((item) => (

              <div className="cart-item" key={item.id}>



                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>




                <div className="cart-item-info">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    <span>Size:</span> {item.size}
                  </p>

                  <p>
                    <span>Color:</span> {item.color}
                  </p>

                  <strong>
                    ${item.price}
                  </strong>

                </div>




                <button
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>



                <div className="quantity-box">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

            ))

          )}

        </div>



        <div className="order-summary">

          <h2>
            Order Summary
          </h2>


          <div className="summary-row">

            <span>Subtotal</span>

            <strong>
              ${subtotal}
            </strong>

          </div>


          <div className="summary-row discount-row">

            <span>Discount (-20%)</span>

            <strong>
              -${discount}
            </strong>

          </div>


          <div className="summary-row">

            <span>Delivery Fee</span>

            <strong>
              ${deliveryFee}
            </strong>

          </div>


          <div className="summary-total">

            <span>Total</span>

            <strong>
              ${total}
            </strong>

          </div>



          <div className="promo-box">

            <div className="promo-input">

              <span>⌁</span>

              <input
                type="text"
                placeholder="Add promo code"
              />

            </div>

            <button>
              Apply
            </button>

          </div>



          <button
            className="checkout-btn"
            disabled={cartItems.length === 0}
          >
            Go to Checkout
            <span>→</span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default Cart;