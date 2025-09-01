import React from "react";

// Pizza component to display individual pizza details
const Pizza = ({ pizzaObj }) => {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <div className="flex  items-center justify-center m-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <div className="pizza-item  flex  item-center  ">
          <img
            src={pizzaObj.photoName}
            alt={pizzaObj.name}
            className={`w-32 h-32 object-cover ${
              pizzaObj.soldOut ? " grayscale" : ""
            }`}
          />
          <li
            className={`text-left p-4 ${
              pizzaObj.soldOut ? "opacity-50  pointer-events-none" : ""
            }`}
          >
            <h3 className="text-lg   font-bold">{pizzaObj.name}</h3>
            <p className="text-sm">Ingredients: {pizzaObj.ingredients}</p>
            <p className="text-lg font-semibold">
              {pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}
            </p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
