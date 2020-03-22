import React from "react";
import "./App.css";
import PS_Container from "./components/PS_Container";
import Dispnum from "./components/testcomponent";
import AddButton from "./components/testcomponent2";
function App() {
  return (
    <div className="App-Root">
      {/* <PS_Container /> */}
      <Dispnum />
      <AddButton />
    </div>
  );
}

export default App;
