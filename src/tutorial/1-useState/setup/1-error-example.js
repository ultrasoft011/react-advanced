import React from 'react';

const ErrorExample = () => {
  let random = 'Random text'
  //handleClick function: to handle the button declared on the JSX "btn"
  const handleClick = () => {
    //The handleClick would not render the new 'random' variable on the VirtualDOM, it is not rerenders the value - useState will allow to do that
    random = 'Im changing the text'
    console.log(`${"It's working!"}`)
  }
  return <React.Fragment>
    <h2>{random}</h2>
    <button className="btn" onClick={handleClick}>Press me!</button>
  </React.Fragment>
}

export default ErrorExample;
