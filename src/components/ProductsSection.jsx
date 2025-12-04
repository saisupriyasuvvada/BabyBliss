import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductsSection.css";

import baby1 from "../assets/baby1.jpg";
import baby2 from "../assets/baby2.jpg";
import baby3 from "../assets/baby3.jpg";
import baby4 from "../assets/baby4.jpg";

const productsData = [
  { id: 1, name: "Baby Diaper Pack", price: 499, image: baby1 },
  { id: 2, name: "Baby Lotion", price: 299, image: baby2 },
  { id: 3, name: "Baby Clothes Set", price: 799, image: baby3 },
  { id: 4, name: "Soft Toys", price: 599, image: baby4 },
  { id: 5, name: "Baby Shampoo", price: 199, image: baby4 },
  { id: 6, name: "Feeding Bottle", price: 349, image: baby3 },
  { id: 7, name: "Pacifier", price: 149, image: baby2 },
  { id: 8, name: "Baby Blanket", price: 999, image: baby1},
  { id: 9, name: "Baby Shoes", price: 699, image: baby1 },
  { id: 10, name: "Baby Hat", price: 249, image: baby2 },
  { id: 11, name: "Baby Wipes", price: 129, image: baby3},
  { id: 12, name: "Baby Rattle", price: 179, image: baby4 },
];

const ProductsSection = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="products-section px-5 py-10">
      <h2 className="section-title text-3xl font-bold mb-6">
        Best For Your Baby
      </h2>

      <div className="products-grid">
        {productsData.map((prod) => (
          <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
        ))}
      </div>

      <h2 className="section-title text-3xl font-bold my-8">
        All Products
      </h2>

      <div className="products-grid">
        {productsData.map((prod) => (
          <ProductCard key={prod.id + 100} product={prod} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
