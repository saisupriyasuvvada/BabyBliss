import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryGrid.css"; // We'll create this CSS

import clothingImg from "../assets/baby1.jpg";
import toysImg from "../assets/toy.jpg";
import feedingImg from "../assets/babybath.jpg";
import diapersImg from "../assets/baby4.jpg";
import bagsImg from "../assets/bag.jpg";
import skincareImg from "../assets/skincare.jpg";

const categories = [
  { name: "Clothing", img: clothingImg, path: "/clothing" },
  { name: "Toys", img: toysImg, path: "/toys" },
  { name: "Feeding", img: feedingImg, path: "/feeding" },
  { name: "Diapers", img: diapersImg, path: "/diapers" },
  { name: "Bags", img: bagsImg, path: "/bags" },
  { name: "Skincare", img: skincareImg, path: "/skincare" },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="category-grid-container">
  <h2 className="category-grid-title">Shop by Category</h2>
  <div className="category-grid-wrapper">
    {categories.map((cat, index) => (
      <div
        key={index}
        className="category-grid-card"
        onClick={() => navigate(cat.path)}
      >
        <img src={cat.img} alt={cat.name} className="category-grid-image" />
        {/* <div className="category-grid-name">{cat.name}</div> */}
      </div>
    ))}
  </div>
</section>

  );
};

export default CategoryGrid;
