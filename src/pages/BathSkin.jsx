import React from "react";

const BathSkin = () => {
  return (
    <div className="px-5 py-10">
      <h2 className="text-3xl font-bold mb-6">Bath & Skin Care</h2>
      <p>Explore gentle and safe products for your baby's bath and skin care.</p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6">
        <div className="border p-4 rounded shadow hover:scale-105 transform transition">
          <img src="https://via.placeholder.com/150" alt="Bath Product" />
          <h3 className="mt-2 font-semibold">Baby Lotion</h3>
          <p>Price: ₹350</p>
        </div>
        <div className="border p-4 rounded shadow hover:scale-105 transform transition">
          <img src="https://via.placeholder.com/150" alt="Bath Product" />
          <h3 className="mt-2 font-semibold">Baby Soap</h3>
          <p>Price: ₹120</p>
        </div>
        <div className="border p-4 rounded shadow hover:scale-105 transform transition">
          <img src="https://via.placeholder.com/150" alt="Bath Product" />
          <h3 className="mt-2 font-semibold">Baby Shampoo</h3>
          <p>Price: ₹250</p>
        </div>
      </div>
    </div>
  );
};

export default BathSkin;
