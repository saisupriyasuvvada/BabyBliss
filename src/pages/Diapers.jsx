import React from "react";

const Diapers = () => {
  return (
    <div className="px-5 py-10">
      <h2 className="text-3xl font-bold mb-6">Diapers</h2>
      <p>Explore our wide range of baby diapers for all ages and sizes.</p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6">
        {/* Example Product Cards */}
        <div className="border p-4 rounded shadow hover:scale-105 transform transition">
          <img src="https://via.placeholder.com/150" alt="Diaper" />
          <h3 className="mt-2 font-semibold">Diaper Pack A</h3>
          <p>Price: ₹500</p>
        </div>
        <div className="border p-4 rounded shadow hover:scale-105 transform transition">
          <img src="https://via.placeholder.com/150" alt="Diaper" />
          <h3 className="mt-2 font-semibold">Diaper Pack B</h3>
          <p>Price: ₹650</p>
        </div>
        <div className="border p-4 rounded shadow hover:scale-105 transform transition">
          <img src="https://via.placeholder.com/150" alt="Diaper" />
          <h3 className="mt-2 font-semibold">Diaper Pack C</h3>
          <p>Price: ₹450</p>
        </div>
      </div>
    </div>
  );
};

export default Diapers;
