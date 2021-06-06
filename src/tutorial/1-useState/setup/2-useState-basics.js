import React, { useState } from 'react';
// useState is a function that came from React

const UseStateBasics = () => {
  console.log(useState());
  // useState will return an array with a value and a function to handle that value
  // const firstArg = useState('Ultra')[0];
  // const secondArg = useState(1)[1];
  // console.log(firstArg, secondArg);

  // Destructuring to use the useState, define a const variable with [text, setText] could be name whatever I want and initialize to useState 
  const [text, setText] = useState('Example');

  return (
    <React.Fragment>
      <h1>{text}</h1>
    </React.Fragment>

  );
};

export default UseStateBasics;
