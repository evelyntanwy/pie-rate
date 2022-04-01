import React, { useState } from "react";

function Pie() {
  const [number, setNumber] = useState([]);

  const handleChange = (evt) => {
    evt.preventDefault();
    console.log(number);
    setNumber(evt.target.value, ...number);
  };

  return (
    <div>
      <h3>Pie</h3>
      <h4>Keyboard</h4>
      {number}
      <div>
        <button onClick={handleChange} value="1">
          1
        </button>
        <button onClick={handleChange} value="3">
          3
        </button>
        <button onClick={handleChange} value="2">
          2
        </button>
        <button onClick={handleChange} value="4">
          4
        </button>
        <button onClick={handleChange} value="5">
          5
        </button>
        <button onClick={handleChange} value="6">
          6
        </button>
        <button onClick={handleChange} value="7">
          7
        </button>
        <button onClick={handleChange} value="8">
          8
        </button>
        <button onClick={handleChange} value="9">
          9
        </button>
        <button onClick={handleChange} value="0">
          0
        </button>
        <button onClick={handleChange} value=".">
          .
        </button>
      </div>
    </div>
  );
}

export default Pie;
