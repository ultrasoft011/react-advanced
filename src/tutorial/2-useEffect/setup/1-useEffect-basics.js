import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  // useState: value and setValue to increase de "value"
  const [value, setValue] = useState(0);
  // useEffect: by default it will rerender whatever is inside in the callback function
  useEffect(() => {
    // I can change the title of the window using this hook

    // I can not place a hook inside a conditional it will show an error but I can create conditionals inside a hook
    if (value >= 1) {
      document.title = `New messages (${value})`;
    }
    console.log("Pressed!");
  });
  return (
    <div>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Press me to increase
      </button>
    </div>
  );
};

export default UseEffectBasics;
