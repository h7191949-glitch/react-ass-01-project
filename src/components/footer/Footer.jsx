import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">


        <div className="footer-about">

          <h2>SHOP.CO</h2>

          <p>
            We have clothes that suit your style and
            <br />
            who you’re proud to wear. From
            <br />
            women to men.
          </p>

          <div className="social-icons">

            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>

          </div>
        </div>



        <div className="footer-column">
          <h3>COMPANY</h3>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>

        </div>


        <div className="footer-column">
          <h3>HELP</h3>
          <a href="#">Customer Support</a>
          <a href="#">Delivery Details</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>



        <div className="footer-column">
          <h3>FAQ</h3>
          <a href="#">Account</a>
          <a href="#">Manage Deliveries</a>
          <a href="#">Orders</a>
          <a href="#">Payments</a>
        </div>



        <div className="footer-column">
          <h3>RESOURCES</h3>
          <a href="#">Free eBooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>
      </div>



      <div className="footer-bottom">

        <p>
          Shop.co © 2000-2023, All Rights Reserved
        </p>

        <div className="payment-methods">

          <div className="payment-card visa">
            VISA
          </div>

          <div className="payment-card mastercard">
            <span></span>
            <span></span>
          </div>

          <div className="payment-card paypal">
            Pay<span>Pal</span>
          </div>

          <div className="payment-card apple">
            Pay
          </div>

          <div className="payment-card google">
            G Pay
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;