import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import NotificationButton from "../components/NotificationButton";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import CategoryStrip from "../components/CategoryStrip/CategoryStrip";
import Cart from "../components/Cart";
import CategoryGrid from "../components/CategoryGrid";
import TopBrands from "./TopBrands";
import BigStore from "./BigStore";
import BigFooter from "./BigFooter";

import baby1 from "../assets/baby1.jpg";
import baby2 from "../assets/baby2.jpg";
import baby3 from "../assets/baby3.jpg";
import baby4 from "../assets/baby4.jpg";
import ProductsSection from "../components/ProductsSection";


const products = [
  { id: 1, name: "Baby Bottle", price: 250, image: baby1 },
  { id: 2, name: "Diaper Pack", price: 500, image: baby2 },
  { id: 3, name: "Baby Lotion", price: 300, image: baby3 },
];

const categories = [
  { name: "Clothing", img: baby1, path: "/clothing" },
  { name: "Toys", img: baby2, path: "/toys" },
  { name: "Feeding", img: baby3, path: "/feeding" },
  { name: "Diapers", img: baby4, path: "/diapers" },
  { name: "Bags", img: baby1, path: "/bags" },
  { name: "Skincare", img: baby3, path: "/skincare" },
];

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />

      {/* Hero */}
      <Hero />

      {/* Category Strip */}
      <CategoryStrip />

      {/* Category Grid Section */}
      <CategoryGrid/>


      
      
 
      {/* Product Section */}
      <ProductsSection/>

      <TopBrands />
      
      <BigFooter />

      {/* Notification Button */}
      {/* <div className="notify-container fixed bottom-5 right-5">
        <NotificationButton />
      </div> */}

      {/* Cart Drawer */}
      <Cart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
};

export default Home;
