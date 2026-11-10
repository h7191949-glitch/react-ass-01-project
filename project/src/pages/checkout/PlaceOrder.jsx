

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/announcement";
import LastestOffer from "../../components/lastestoffer/LatestOffer";
import Footer from "../../components/footer/Footer";
import "./PlaceOrder.css";

const API_URL = "https://e-commerce-back-end-hknq.vercel.app/api/orders";

function PlaceOrder() {
  const navigate = useNavigate();

  const [cartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  const discount = Math.round(subtotal * 0.2);
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);

      const orderData = {
        customerName: formData.customerName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),
        products: cartItems.map((item) => ({
          name: item.name,
          quantity: Number(item.quantity),
          price: Number(item.price),
        })),
        totalAmount: total,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Order could not be placed.");
      }

      localStorage.removeItem("cart");
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Announcement />
      <Navbar />

      <section className="place-order-page">
        <div className="place-order-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>Checkout</span>
        </div>

        {success ? (
          <div className="order-success">
            <h1>Order Placed Successfully!</h1>
            <p>Your order has been saved successfully.</p>
            <button onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <h1 className="place-order-title">CHECKOUT</h1>

            {cartItems.length === 0 ? (
              <div className="checkout-empty">
                <p>Your cart is empty.</p>
                <Link to="/">Continue Shopping</Link>
              </div>
            ) : (
              <div className="place-order-layout">
                <form
                  className="customer-form"
                  onSubmit={handleSubmit}
                >
                  <h2>Delivery Information</h2>

                  <label htmlFor="customerName">Full Name</label>
                  <input
                    id="customerName"
                    type="text"
                    name="customerName"
                    placeholder="Enter your full name"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="address">Complete Address</label>
                  <textarea
                    id="address"
                    name="address"
                    placeholder="Enter your complete delivery address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="4"
                    required
                  />

                  {error && (
                    <p className="checkout-error">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="place-order-btn"
                    disabled={loading}
                  >
                    {loading ? "Placing Order..." : "Place Order"}
                  </button>
                </form>

                <div className="checkout-order-summary">
                  <h2>Your Order</h2>

                  {cartItems.map((item, index) => (
                    <div className="checkout-product" key={`${item.id}-${index}`}>
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <strong>
                        ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                      </strong>
                    </div>
                  ))}

                  <div className="checkout-summary-row">
                    <span>Subtotal</span>
                    <strong>${subtotal.toFixed(2)}</strong>
                  </div>

                  <div className="checkout-summary-row">
                    <span>Discount (-20%)</span>
                    <strong>-${discount.toFixed(2)}</strong>
                  </div>

                  <div className="checkout-summary-row">
                    <span>Delivery Fee</span>
                    <strong>${deliveryFee.toFixed(2)}</strong>
                  </div>

                  <div className="checkout-total">
                    <span>Total</span>
                    <strong>${total.toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <LastestOffer />
      <Footer />
    </>
  );
}

export default PlaceOrder;
