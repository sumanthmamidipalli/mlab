import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/header";
import Carousal from "./components/carousal";

function App(props) {
  return (
    <div className="App">
      <button className="nav-btn">Menu</button>
      <NavBar />
      <main className="App-main">
        <Header />
        <h1>
          create something <span>amazing</span>
        </h1>
        <Carousal />
        <section>sec1</section>
        <section>sec2</section>
        <section>sec3</section>
      </main>
    </div>
  );
}

export default App;
