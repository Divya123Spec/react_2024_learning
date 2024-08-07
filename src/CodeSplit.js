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
