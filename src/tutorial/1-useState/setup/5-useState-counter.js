import React, { useState } from "react";

const UseStateCounter = () => {
  // Use the useState hook, and pass a '0' as argument
  const [element, setElement] = useState(0);
  const handleReset = () => {
    setElement(0);
  };
  const ComplexIncrease = () => {
    setTimeout(() => {
      {/* pass as argument a prevState or previous state to let Javascript know about the previous value that it should take into account */}
      setElement((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <h2>App Counter</h2>
      <h3>{element}</h3>
      {/* Handle the increase and decrease buttons, I can set up the button function directly*/}
      <button className="btn" onClick={() => setElement(element + 1)}>
        Increase
      </button>
      <button className='btn' onClick={handleReset}>Reset</button>
      <button className='btn' onClick={() => setElement(element - 1)}>Decrease</button>

      <h2>Complex Counter</h2>
      <h3>{element}</h3>
      <button className='btn' onClick={ComplexIncrease}>Increase with delay</button>
    </>
  );
};

export default UseStateCounter;
