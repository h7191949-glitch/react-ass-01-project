import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <>
      <section className="hero-section">

        <div className="hero-content">

          <h1>
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>

          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>

          <div className="hero-stats">

            <div className="stat">
              <h2>200+</h2>
              <span>International Brands</span>
            </div>

            <div className="stat">
              <h2>2,000+</h2>
              <span>High-Quality Products</span>
            </div>

            <div className="stat">
              <h2>30,000+</h2>
              <span>Happy Customers</span>
            </div>

          </div>

        </div>


        <div className="hero-image">

          <img
            src="/images/Hero-section.jpg"
            alt="Fashion models"
          />

          <div className="star star-one"></div>
          <div className="star star-two"></div>

        </div>

      </section>


      <section className="brands-section">

        <div>VERSACE</div>

        <div>ZARA</div>

        <div>GUCCI</div>

        <div>PRADA</div>

        <div>Calvin Klein</div>

      </section>
    </>
  )
}