import { useState } from "react";

const Colorize = () => {
  const [color, setColor] = useState("#3f8f8f");

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <>
      <div className="box" style={{ backgroundColor: color }}></div>
      <h2>{color}</h2>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default Colorize;
