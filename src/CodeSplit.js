import React from "react";

function CodeSplit() {
  return (
    <div>
      <h1>Code Spliting</h1>
    </div>
  );
}

export default CodeSplit;
// What is Code Spliting in React?
// Coding spliting is a technique to split the javascript bundle into smaller chunks
// which are loaded on demand.
// This can improve the performance of the application by reducing the initial load time.
// React.lazy() function allows you to load the component dynamically.
// It returns a promise which resolves to a module containing the component.The Suspense component is used to wrap the lazy loaded component.
// It displays a fallback UI while the component is loading.

// What is the role of Lazy and Suspense in React?
// react.lazy is afunction that allows you to load acomponent lazily.
// It enables code spliting by allowing you to import acomponent asynchronously/dynamically.
// means compoenent will be loaded only when it is required.

// Suspense is a component that is used to wrap the lazy loaded component.
// it is used to display fallback UI while the alzily loaded component is being loaded.

// what are pros and cons of code spliting?\
// prons
// 1.Reduces the initial load time of the application.
// 2.Improves the performance of the application.
// 3.optimize the bandwidth usgae by loading only the required code.
// 4.parallel loading of the code chunks.
// 5.easier to maintain and update the code.

// cons
// 1.complexity in managing the code spliting.
// 2.increases the number of requests to the server.
//3.Tooling dependencies are required to implement code spliting.
//4.runtime erros
//5.Learing curve for developers.

// import function in code spliting
// import React, { lazy, Suspense } from "react"

;
// const CodeSplit = lazy(() => import("./CodeSplit"));
//The import function returns a promise that allow dynamic loading of the module.

// What is the purpsoe of the fallback prop in suspense component?
// the fallback prop provides a loading indicator ,
//  while the dynamic imported component is beigng loaded.
//  it is displayed until the component is loaded.
