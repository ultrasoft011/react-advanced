import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // Second way to use the hook useState with React.useState
  const [people, setPeople] = React.useState(data);
  // First way to handle the useState function second argument
  // const handle = () => {
  //   setPeople([])
  // }
  const handleRemove = (id) => {
    // Filter with an specific condition to return only the items different than the id that was clicked
    let newPeople = people.filter((element) => element.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((element) => {
        //Destructuring the element (every single object inside the data array) by "id" and "name"
        const {id, name} = element;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => handleRemove(id)}>
              Remove
            </button>
          </div>
        );
      })}
      {/* Second way to handle the useState function */}
      <button className="btn" onClick={() => setPeople([])}>
        Clear me
      </button>
    </>
  );
};

export default UseStateArray;
