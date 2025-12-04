import React from "react";
import "./TopBrands.css";

import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand5.png";
import brand3 from "../assets/brand3.jpeg";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.jpeg";
import brand7 from "../assets/brand4.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

const TopBrands = () => {
  return (
    <section className="top-brands-section">
      <h2 className="top-brands-heading">Top Brands</h2>
      <div className="brands-marquee">
        <div className="brands-track">
          {brands.concat(brands).map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand} alt={`Brand ${index + 1}`} className="brand-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
