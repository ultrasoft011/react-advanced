import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  // 1. Set up the useState hook
  const [users, setValue] = useState([]);
  // 2-A Set up the async await function for fetch data
  const getData = async () => {
    // Set up the variable that will fecth the data
    const response = await fetch(url);
    // Set up the variable that will save the data as json format
    const users = await response.json();
    // Update the "value" -> render
    // console.log(users);
    setValue(users);
  };

  // 2. Set up the useEffect hook -> Careful with the dependency, use [] as second parameter to prevent inifite loop
  useEffect(() => {
    getData();
  }, []);
  
  return <>{users.map((user) => {
    return <>
    <h1>{user.login}</h1>
    </>
  })}</>;
};

export default UseEffectFetchData;
