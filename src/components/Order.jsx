import React from "react";

const Order = ({ closeHour, openHour }) => {
  return (
    <div className="text-[#edc84b]">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online!
      </p>
      <button className="bg-[#edc84b] text-white py-2 px-4 rounded mt-10 mb-10">
        Order Now
      </button>
    </div>
  );
};

export default Order;
