import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const user1 = {
    nombre: "mau",
    edad: 21,
  };
  const user2 = {
    nombre: "nico",
    edad: 55,
  };
  const user3 = {
    nombre: "erika",
    edad: 12,
  };
  const user4 = {
    nombre: "joaquin",
    edad: 124,
  };
  // Supongamos que me viene de alguna API REST (algún servidor)
  const users = [user1, user2, user3, user4];

  return (
    <>
      <div></div>
      <h1>FERRARI</h1>
      <h3>y sus caídos</h3>
      <div className="card">
        <Cards users={users}></Cards>
      </div>
    </>
  );
}

export default App;
