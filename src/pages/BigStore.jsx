import React from "react";
import storeImg from "../assets/brand1.png";

const BigStore = () => {
  return (
    <section className="big-store my-10">
      <img
        src={storeImg}
        alt="Big Store for Little Ones"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </section>
  );
};

export default BigStore;
