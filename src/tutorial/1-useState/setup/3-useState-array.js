import React from 'react';
import { data } from '../../../data'

const UseStateArray = () => {
  // Second way to use the hook useState with React.useState
  const [people, setPeople] = React.useState(data)
  return <>
    {people.map((element) => {
      //Destructuring the element (every single object inside the data array) by "id" and "name"
      const {id, name} = element
      return (
        <div key={id} className='item'>
          <h4>{name}</h4>
        </div>
      )
    })}

  </>
};

export default UseStateArray;
