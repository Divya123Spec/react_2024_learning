import React, { useEffect, useState } from "react";

function Throttling_Debounce() {
  const [data, setData] = useState([]);
  // Example of Throttling
  // throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
  // in this function we are creating a throttle function which will take two arguments one is function and other is delay
  const throttle = (func, delay) => {
    let inThrottle; // inThrottle is a variable which is used to check if the function is called or not
    return function () {
      // here we are returning a function which will take the arguments of the function which is passed in the throttle function
      if (!inThrottle) {
        func.apply(this, arguments);
        inThrottle = true; // here we are making the inThrottle true so that the function will not call again
        setTimeout(() => {
          inThrottle = false; // here we are making the inThrottle false so that the function can be called again
        }, delay);
      }
    };
  };
  // Using apply ensures that the this context inside func remains the
  //  same as what it was when the throttled function was originally called.
  const handleClick = () => {
    console.log("Button Clicked");
  };

  // Example of Debounce
  // Debouncing is a technique in which, no matter how many times the user fires the event,
  // the attached function will be executed only after the specified time once the user stops firing the event.
  let counter = 0;
  const getData = () => {
    console.log("Data Fetched");
    console.log(counter++);
  };

  const debounce = (fn, delay) => {
    console.log("delay", delay);
    let timer;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        getData.apply(context, args);
      }, delay);
    };
  };
  const betterFunction = debounce(getData, 300);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Throttling and Debounce</h1>
      <button onClick={throttle(handleClick, 2000)}>
        Throttling & Debounce
      </button>
      <div>
        <input type="text" placeholder="name" onKeyUp={betterFunction} />
      </div>

      <div>
        {/* {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Throttling_Debounce;


// Throtting
// How It Works:
// The function throttle() keeps track of the last time the event was triggered.
// If the function is called again before the specified delay, it will be ignored.
// Only after the delay has passed, it will trigger the function again.

// debouncing
// How It Works:
// The function debounce() waits for a specified time (e.g., 1000ms) before executing the function.
// If the event is triggered again within that time, the previous timer is cleared and reset.
// Only when the event stops being triggered for the defined delay will the function be executed.

// Visual Example:
// Throttling: If a scroll event fires continuously for 10 seconds and you're throttling it to execute every 1 second, 
// it will execute the callback once every second during the scroll.
// Debouncing: If a user types in a search box, the function will only execute after they stop typing for a defined delay (e.g., 300ms).