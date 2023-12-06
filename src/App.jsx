import React from "react";
import Customizer from "./Pages/Customizer";
import Canvas from "./Canvas";
import Home from "./Pages/Home";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
};
export default App;
