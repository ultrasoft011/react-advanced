import React, { useState } from 'react';

const UseStateCounter = () => {
  const [element, setElement] = useState('0')
  return <>
      <h2>App Counter</h2>
      <h3>{element}</h3>
      <button className='btn'>Increase</button>
      <button className='btn'>Reset</button>
      <button className='btn'>Decrease</button>
    </>
};

export default UseStateCounter;
