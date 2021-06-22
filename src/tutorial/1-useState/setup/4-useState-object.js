import React, { useState } from "react";

const UseStateObject = () => {
  // Using the useState hook, I can pass directly an object as argument in the useSate('object')
  const [person, setPerson] = useState({
    name: "Andres",
    lastName: "Ballesteros",
    age: 29,
    message: "Hello Ultra",
  });
  const handleClick = () => {
    // To change the text for another, I need to write the property with : inside of { } and put the new message
    // To keep the other properties of the object, I can use the spread operator (...object) and then , put the property I want to change
    setPerson({ ...person, message: "Hello World" });
  };
  return (
    <div>
      <h2>useState object example</h2>
      {/* Render the person properties */}
      <h3>{person.name}</h3>
      <h3>{person.lastName}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={handleClick}>
        Press Me!
      </button>
    </div>
  );
};

export default UseStateObject;
