import React from "react";
import "./BigFooter.css";

const BigFooter = () => {
  return (
    <footer className="big-footer-section">
      {/* Top banner */}
      <div className="footer-banner">
        <h2>Big Store for Little Ones</h2>
      </div>

      {/* Footer main content */}
      <div className="footer-content max-w-6xl mx-auto pt-16 px-5">
        <div className="footer-columns">
          {/* Column 1 */}
          <div className="footer-column">
            <h3 className="footer-title">Baby Care</h3>
            <ul className="footer-list">
              <li>Feeding</li>
              <li>Diapers</li>
              <li>Skincare</li>
              <li>Clothing</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-list">
              <li>Toys</li>
              <li>Top Brands</li>
              <li>Offers</li>
              <li>Stores</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3 className="footer-title">Policies</h3>
            <ul className="footer-list">
              <li>Return Policy</li>
              <li>Shipping Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3 className="footer-title">Connect</h3>
            <p className="mb-2">Download our App</p>
            <div className="app-buttons">
              <button className="store-btn">Play Store</button>
              <button className="store-btn">App Store</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom text-center mt-8 pb-5">
        &copy; 2025 BabyBiliss. All rights reserved.
      </div>
    </footer>
  );
};

export default BigFooter;
