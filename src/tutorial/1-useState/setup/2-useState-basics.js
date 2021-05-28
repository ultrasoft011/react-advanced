import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Hello Ultrasoft!')
  const handleClick = () => {
    setText("Hello React World");
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>Click me</button>
    </React.Fragment>
  );
  
  
  

};

export default UseStateBasics;
