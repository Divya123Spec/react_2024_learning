import React from "react";

function Hoc() {
  const newComponent = higherOrderComponent(OriginalComponent);

  //Function Creation  for resuable component logic
  function add(a, b) {
    return a + b;
  }

  // main function
  function higherOrder(a, addReference) {
    return addReference(a, 20);
  }
  //Function call
  higherOrder(30, add); // 50

  return (
    <>
      <h1>Hoc</h1>
    </>
  );
}

export default Hoc;

// HOC
// Advanced method of resuing component functionlity  logic.
// it simply takes the original component and returns a new component with additional functionality.
// easy to handle
// no need to copy same logic everywhere
// makes code more readable.
