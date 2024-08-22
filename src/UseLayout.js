import React, { useEffect, useLayoutEffect } from "react";

function UseLayout() {
  useEffect(() => {
    console.log("Message from useEffect");
  });

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  });

  return (
    <div>
      UseLayout
      <div>
        {Array(5)
          .fill("")
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </div>
    </div>
  );
}

export default UseLayout;
// Use LayoutHook
// To perform DOM mutations asyncronusly  after all the Dom changes
// UseLayoutEffect works the same as useEffect,but it calls before
// the user interface gets mounted/updated
// UseEffect gets called after priting the DOM elements
// UseLayoutEffect gets called before printing the DOM elements

// usage
// measuring DOM elements and for animating the elements and to fix flickering issue
// fo api calls also we can use, but office docs says recommendation to use useeffect for api calls

