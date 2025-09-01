import React from "react";
import Pizza from "./Pizza.jsx";

// Import all pizza images
import focaccia from "../assets/pizzas/focaccia.jpg";
import margherita from "../assets/pizzas/margherita.jpg";
import spinaci from "../assets/pizzas/spinaci.jpg";
import funghi from "../assets/pizzas/funghi.jpg";
import salamino from "../assets/pizzas/salamino.jpg";
import prosciutto from "../assets/pizzas/prosciutto.jpg";

const PizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 10,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaci,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];

const Menu = () => {
  const pizzas = PizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className="mt-15">
      <h2 className="text-lg md:text-3xl font-light text-center mt-10 text-[#edc84b] uppercase border-t-1 md:border-t-3 border-b-1 md:border-b-3 w-[100px] md:w-[200px] flex items-center justify-center m-auto border-[#edc84b] py-3 ">
        Our Menu
      </h2>

      {numPizzas > 0 ? (
        <>
          <p className="mx-auto text-center max-w-md md:max-w-2xl mt-20 text-lg md:text-2xl">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 mt-15 w-full max-w-4xl mx-auto">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p className="text-center mt-20 text-lg md:text-2xl text-[#f50f0f]">
          {" "}
          we're still working on our menu,Please come back later:{" "}
        </p>
      )}

      {/* <div>
        <Pizza
          name="Pizza Spinaci"
          photoName={spinaci}
          ingredients="Tomato, mozzarella, spinach, and ricotta cheese"
          price={12}
        />
        <Pizza
          name="Pizza Funghi"
          photoName={funghi}
          ingredients="Tomato, mushrooms, and mozzarella cheese"
          price={10}
        />
      </div> */}
    </div>
  );
};

export default Menu;
