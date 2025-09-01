import React from "react";
import Order from "./Order.jsx";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="text-center mt-10 text-lg md:text-2xl">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <div className="text-[#f50f0f] mt-20">
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
