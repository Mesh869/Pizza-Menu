import React from "react";
import "./App.css";
import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
