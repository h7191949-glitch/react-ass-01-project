import React from "react";
import "./DressStyle.css";


const styles = [
  {
    id: 1,
    title: "Casual",
    image: "/images/dress-style-1.png",
    className: "casual",
  },
  {
    id: 2,
    title: "Formal",
    image: "/images/dress-style-2.png",
    className: "formal",
  },
  {
    id: 3,
    title: "Party",
    image: "/images/dress-style-3.png",
    className: "party",
  },
  {
    id: 4,
    title: "Gym",
    image: "/images/dress-style-4.png",
    className: "gym",
  },
];

function DressStyle() {
  return (
    <section className="dress-style-section">

      <h2>BROWSE BY DRESS STYLE</h2>

      <div className="dress-style-grid">

        {styles.map((style) => (
          <div
            className={`dress-style-card ${style.className}`}
            key={style.id}
          >
            <h3>{style.title}</h3>

            <img
              src={style.image}
              alt={style.title}
            />
          </div>
        ))}

      </div>

    </section>
  );
}

export default DressStyle;