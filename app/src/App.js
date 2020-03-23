import React from "react";
import "./App.css";

import Header from "./components/Header";
import HorizontalScrollArea from "./components/HorizontalScrollArea";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App-Root">
      {/* <Header /> */}
      <HorizontalScrollArea />
      <Footer />
    </div>
  );
}

export default App;
