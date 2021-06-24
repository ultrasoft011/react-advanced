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
    console.log('use effect');
    window.addEventListener('resize', checkSize)
    // Returning a function inside the useEffect when I using event listeners will prevent to have leak of memory, inside this function I need to call the window.removeEventListener to clean up the code
    // return () => {
    //   console.log('clean up');
    //   window.removeEventListener('resize', checkSize);
    // }
    // Dependency: It will only runs one the useEffect hook so the event listener will run only once, but the clean up is still important when React renders a component and disappear it.
  }, []);
  return <>
    <h1>{size}</h1>
  </>;
};

export default UseEffectCleanup;
