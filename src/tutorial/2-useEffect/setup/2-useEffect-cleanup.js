import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // useState hook
  // window.innerWidth: will bring the actual width of a window
  const [size, setSize] = useState(window.innerWidth);

  // useEffect hook: to change the width as soon as the window get resized
  // EventListener with the 'resize' event to listen the changes
  // checkSize: will be the function to handle the new width information

  const checkSize = () => {
    // Call the setSize from the useState hook and pass as argument the variable (window.innerWidth), that will be the new value of the window width and the {size} will recognize the new value
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
  });
  return <>
    <h1>{size}</h1>
  </>;
};

export default UseEffectCleanup;
