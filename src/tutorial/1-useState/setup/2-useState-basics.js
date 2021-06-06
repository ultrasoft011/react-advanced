import React, { useState } from 'react';
// useState is a function that came from React

//Hooks Fundamentals: 
// 1. The hooks must start with "use"
// 2. Components name must be in UpperCase like "UseStateBasics"
// 3. The hook must be in the function or component body

const UseStateBasics = () => {
  console.log(useState());
  // useState will return an array with a value and a function to handle that value
  // const firstArg = useState('Ultra')[0];
  // const secondArg = useState(1)[1];
  // console.log(firstArg, secondArg);

  // Destructuring to use the useState, define a const variable with [text, setText] could be name whatever I want and initialize to useState 
  const [text, setText] = useState('Example');
  const handleClick = () => {
    // setText or the second value of the useState is a function
    if (text === 'Example') {
      setText('New text')
    }
    else {
      setText('Example')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>Press me!</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
