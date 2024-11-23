import React, { useEffect, useState } from "react";

function Hook_useeffect() {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(1);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  useEffect(() => {
    // here function is the first argument
    const fetchData = async () => {
      const response = await fetch("https://catfact.ninja/fact");
      const reslut = await response.json();
      setData([reslut]);
      console.log(typeof reslut, "hook_useeffect");
    };
    fetchData(); // calling the function
  }, []); // here array is the second argument (array of dependencies)



  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      setName("Doe");
    }, 2000); // after 2 seconds the count will increase by 1, if you add a dependency in the array then it will increase by 1 after every render
  }, [count, name]); //when you add a dependency in the array then it will increase by 1 after every render(only once it will increase by 1)
  // when you put the count in the array then it will increase by 1 after every render

  return (
    <div>
      <h1>Hook_useeffect</h1>
      {data &&
        data.map((item) => (
          <div>
            <h1 key={item.id}></h1>
            <h1>{item.fact} Factttttttttttttt</h1>
          </div>
        ))}
      <h1>I have rendered {count} times!</h1>
      <h4>{name}</h4>
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
// any other operations that needs to  component has been rendered

// what is dependency array?
// The second argument of useEffect is an array of dependencies.
// If you pass an empty array, it will only run once after the initial render.
// If you pass a value, it will run every time that value changes.
// empty array means no dependencies and it will run only once after the initial render.

// examples of side effects
// 1. fetching data from an api
// 2. updating the DOM directly
// 3.Timers and intervals(setTimeout, setInterval, clearInterval)
