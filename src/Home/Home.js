import React, { Component } from "react";
import ParkComponent from "./ParkComponent.js";

class Home extends Component {
  render() {
    console.log("Home loaded");
    return (
      <div className="ParkComponent">
        <ParkComponent />
      </div>
    );
  }
}

export default Home;
