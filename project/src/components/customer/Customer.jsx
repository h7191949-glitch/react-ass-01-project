import React, { useState } from "react";
import "./Customer.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 4,
    name: "Michael R.",
    text: "The quality of the clothing is excellent and the delivery was quick. I will definitely be shopping here again. Highly recommended!",
  },
  {
    id: 5,
    name: "Emily S.",
    text: "I absolutely love the collection. Everything looks exactly like the pictures and the quality is much better than I expected.",
  },
  {
    id: 6,
    name: "David P.",
    text: "Great shopping experience from start to finish. The clothes fit perfectly and the customer service was excellent.",
  },
];

function HappyCustomers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= testimonials.length - 3) {
        return 0;
      }

      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return testimonials.length - 3;
      }

      return prevIndex - 1;
    });
  };

  return (
    <section className="happy-customers">

      <div className="happy-customers-header">

        <h2>OUR HAPPY CUSTOMERS</h2>

        <div className="slider-arrows">

          <button onClick={prevSlide} className="arrow-btn">
            ←
          </button>

          <button onClick={nextSlide} className="arrow-btn">
            →
          </button>

        </div>

      </div>


      <div className="testimonial-wrapper">

        <div
          className="testimonial-slider"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}
        >

          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>

              <div className="stars">
                ★★★★★
              </div>

              <div className="customer-name">
                <span>{testimonial.name}</span>
                <span className="verified">✓</span>
              </div>

              <p>
                "{testimonial.text}"
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HappyCustomers;