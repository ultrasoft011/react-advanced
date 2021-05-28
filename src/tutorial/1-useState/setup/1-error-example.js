import React from 'react';

const ErrorExample = () => {
  let random = 'Random text'
  let handleClick = () => {
    console.log('Random title')
  }
  return (
    <React.Fragment>
      <h2>
        {random}
      </h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
