import React, { useEffect, useState } from "react";

function Hook_useeffect() {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(1);
  useEffect(() => {
    // here function is the first argument
    const fetchData = async () => {
      const response = await fetch("https://catfact.ninja/fact");
      const reslut = await response.json();
      setData(reslut);
      console.log(reslut);
    };
    fetchData(); // calling the function
  }, []); // here array is the second argument (array of dependencies)

  return (
    <div>
      <h1>
        Hook_useeffect
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </h1>
    </div>
  );
}

export default Hook_useeffect;

// Useeffect?
// some data in ui loading after few sconds this is call side effects (thorugh api call)
// useEffect is a hook that allows you to perform side effects in function components.
// It is similar to componentDidMount and componentDidUpdate in classes.
// useEffect runs after every render of the component.
// Rendered after side effects are performed.
// useEffect is a function that takes two arguments: a function and an array of dependencies.
// example
// for example fetching data from an api, updating the DOM directly, etc.
// any other operations that needs to be performed after the component has been rendered

// what is dependency array?
// The second argument of useEffect is an array of dependencies.
// If you pass an empty array, it will only run once after the initial render.
// If you pass a value, it will run every time that value changes.
// empty array means no dependencies and it will run only once after the initial render.
