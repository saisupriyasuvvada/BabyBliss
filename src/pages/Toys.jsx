import React from "react";

const Toys = () => {
  return (
    <div className="px-5 py-10">
      <h2 className="text-3xl font-bold mb-6">Toys</h2>
      <p>Discover a variety of toys that keep your baby entertained and learning.</p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6">
        <div className="border p-4 rounded shadow hover:scale-105 transform transition">
          <img src="https://via.placeholder.com/150" alt="Toy" />
          <h3 className="mt-2 font-semibold">Soft Toy A</h3>
          <p>Price: ₹300</p>
        </div>
        <div className="border p-4 rounded shadow hover:scale-105 transform transition">
          <img src="https://via.placeholder.com/150" alt="Toy" />
          <h3 className="mt-2 font-semibold">Toy Set B</h3>
          <p>Price: ₹450</p>
        </div>
        <div className="border p-4 rounded shadow hover:scale-105 transform transition">
          <img src="https://via.placeholder.com/150" alt="Toy" />
          <h3 className="mt-2 font-semibold">Rattle C</h3>
          <p>Price: ₹250</p>
        </div>
      </div>
    </div>
  );
};

export default Toys;
