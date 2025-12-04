import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaBell, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NotificationCard from "../NotificationCard";
import "./Navbar.css";

const Navbar = ({ cartOpen, setCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const notifRef = useRef(null);

  const navigate = useNavigate();

  const notifications = [
    "Your order #1234 has been shipped",
    "50% off on Baby Diapers today!",
    "New Toys collection is live!",
  ];

  // Click outside to close notification panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to trigger app notification card and browser notification
  const sendNotification = () => {
    const message = "This is a beautiful notification card!";
    setCards((prev) => [...prev, message]);

    // Auto-remove card after 4s
    setTimeout(() => {
      setCards((prev) => prev.filter((msg) => msg !== message));
    }, 4000);

    // Browser notification
    if (!("Notification" in window)) {
      alert("This browser does not support notifications.");
    } else if (Notification.permission === "granted") {
      new Notification("BabyBliss", { body: message });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("BabyBliss", { body: message });
        }
      });
    }
  };

  return (
    <>
      <div className="offer-bar">
        🎉 Big Sale: Get up to 50% off on Baby Essentials!
      </div>

      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>BabyBliss</div>

        {/* Search Box */}
        <div className={`search-box ${searchActive ? "active" : ""}`}>
          <input type="text" placeholder="Search for baby products..." />
          <button className="search-btn" onClick={() => setSearchActive(!searchActive)}>
            <FaSearch />
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li onClick={() => navigate("/boysfashion")}>Boy Fashion</li>
          <li onClick={() => navigate("/girlsfashion")}>Girl Fashion</li>
          <li onClick={() => navigate("/diapers")}>Diapers</li>
          <li onClick={() => navigate("/toys")}>Toys</li>
          <li onClick={() => navigate("/bathskin")}>Bath & Skin</li>
        </ul>

        {/* Icons */}
        <div className="icons">
          <FaUser className="icon" />

          <div className="notification-wrapper" ref={notifRef} style={{ position: "relative" }}>
            <FaBell className="icon" onClick={() => setNotifOpen(!notifOpen)} />
            <span className="notification-dot"></span>

            {notifOpen && (
              <div className="notification-panel">
                <h4>Notifications</h4>
                <ul>
                  {notifications.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                  <li>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        sendNotification();
                      }}
                    >
                      Send Notification
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <FaShoppingCart className="icon" onClick={() => setCartOpen(!cartOpen)} />
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        {/* Mobile Links */}
        {menuOpen && (
          <ul className="mobile-menu">
            <li onClick={() => { navigate("/boysfashion"); setMenuOpen(false); }}>Boy Fashion</li>
            <li onClick={() => { navigate("/girlsfashion"); setMenuOpen(false); }}>Girl Fashion</li>
            <li onClick={() => { navigate("/diapers"); setMenuOpen(false); }}>Diapers</li>
            <li onClick={() => { navigate("/toys"); setMenuOpen(false); }}>Toys</li>
            <li onClick={() => { navigate("/bathskin"); setMenuOpen(false); }}>Bath & Skin</li>
          </ul>
        )}
      </nav>

      {/* App Notification Cards */}
      <div className="notification-cards-container">
        {cards.map((msg, idx) => (
          <NotificationCard
            key={idx}
            message={msg}
            onClose={() => setCards((prev) => prev.filter((m) => m !== msg))}
          />
        ))}
      </div>
    </>
  );
};

export default Navbar;
