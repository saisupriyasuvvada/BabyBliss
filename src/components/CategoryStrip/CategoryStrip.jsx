import React from "react";
import "./CategoryStrip.css";

// Import category images
import boysImg from "../../assets/categories/boy.jpg";
import girlsImg from "../../assets/categories/girls.webp";
import winterImg from "../../assets/categories/winter.jpg";
import summerImg from "../../assets/categories/summer.jpg";
import festivalImg from "../../assets/categories/fest.webp";
import hoodiesImg from "../../assets/categories/hoodies.webp";
import jeansImg from "../../assets/categories/jeans.webp";
import frocksImg from "../../assets/categories/frock.jpg";
import everydayImg from "../../assets/categories/everyday.webp";

// Categories array
const categories = [
  { name: "Boys' Clothing", image: boysImg },
  { name: "Girls' Clothing", image: girlsImg },
  { name: "Winter", image: winterImg },
  { name: "Summer", image: summerImg },
  { name: "Festival", image: festivalImg },
  { name: "Hoodies", image: hoodiesImg },
  { name: "Jeans", image: jeansImg },
  { name: "Frocks", image: frocksImg },
  { name: "Everyday Wear", image: everydayImg },
  { name: "Jeans", image: jeansImg },
  { name: "Frocks", image: frocksImg },
  { name: "Everyday Wear", image: everydayImg },
];

const CategoryStrip = () => {
  return (
    <section className="category-strip">
      <div className="categories-container">
        {categories.map((cat, idx) => (
          <div className="category-item" key={idx}>
            <img src={cat.image} alt={cat.name} className="category-image" />
            <span className="category-name">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryStrip;
