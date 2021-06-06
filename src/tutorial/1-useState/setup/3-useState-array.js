import React from 'react';
import { data } from '../../../data'

const UseStateArray = () => {
  // Second way to use the hook useState with React.useState
  const [people, setPeople] = React.useState(data)
  // First way to handle the useState function second argument
  // const handle = () => {
  //   setPeople([])
  // }
  return <>
    {people.map((element) => {
      //Destructuring the element (every single object inside the data array) by "id" and "name"
      const {id, name} = element
      return (
        <div className='item'>
          <h4>{name}</h4>
        </div>
      )
    })}
    {/* Second way to handle the useState function */}
    <button className='btn' onClick={() => { setPeople([])}}>Clear me</button>
  </>
};

export default UseStateArray;
