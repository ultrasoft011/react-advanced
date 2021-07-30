import React, { useState, useEffect } from "react";

const url = "https://api.jikan.moe/v3/anime/16498/episodes?rapidapi-key=a2ec0e9e25msh160d9a5d4920085p16266djsnda83215d52a0";

const UseEffectFetchData = () => {
  // 1. Set up the useState hook
  const [users, setValue] = useState([]);
  // 2-A Set up the async await function for fetch data
  const getData = async () => {
    // Set up the variable that will fecth the data
    const response = await fetch(url);
    // Set up the variable that will save the data as json format
    console.log(response)
    const users = await response.json();
    // Update the "value" -> render
    console.log(users.episodes);
    setValue(users);
  };

  // 2. Set up the useEffect hook -> Careful with the dependency, use [] as second parameter to prevent inifite loop
  useEffect(() => {
    getData().then(data => setValue(data));
  }, []);
  
  return (
    <ul>
      {users.episodes.map((item) => (
        <li key={item.episode_id}>{item.title}</li>
      ))}
    </ul>
  );
      }

      {/* {users.map((user) => {
        return (
          <>
            <h1>{user.episode_id}</h1>
          </>
        );
      })} */}

export default UseEffectFetchData;