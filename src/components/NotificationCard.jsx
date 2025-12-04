import React from "react";
import "./NotificationCard.css";

const NotificationCard = ({ message, onClose }) => {
  return (
    <div className="notification-card">
      <span className="message">{message}</span>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default NotificationCard;
