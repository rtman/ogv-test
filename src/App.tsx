import React from "react";
import "./App.css";
import { MultiInstance } from "./multiInstance";
import { SingleInstance } from "./singleInstance";

const App = () => {
  const [singleInstance, setSingleInstance] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => setSingleInstance(true)}>SingleInstance</button>
        <button onClick={() => setSingleInstance(false)}>MultiInstance</button>
      </div>
      <br />
      {singleInstance ? <SingleInstance /> : <MultiInstance />}
    </div>
  );
};

export default App;
