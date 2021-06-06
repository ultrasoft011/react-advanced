import React from 'react';

const ErrorExample = () => {
  let random = 'Random text'
  //handleClick function: to handle the button declared on the JSX "btn"
  const handleClick = () => {
    console.log(`${"It's working"}`)
  }
  return <React.Fragment>
    <h2>{random}</h2>
    <button className="btn" onClick={handleClick}>Press me!</button>
  </React.Fragment>
}

export default ErrorExample;
