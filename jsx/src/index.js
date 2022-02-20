// Import Reach & ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click Here!";
}

// Create a React Component
const App = () => {
  return (
    <div>
      <label htmlFor="name" className="label">
        Enter Name:
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take React Component and Display it
ReactDOM.render(<App />, document.querySelector("#root"));
