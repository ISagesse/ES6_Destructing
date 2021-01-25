import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

let [honda, tesla] = cars;

let {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
let {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
let {
  coloursByPopularity: [hondaTopColour]
} = honda;
let {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
