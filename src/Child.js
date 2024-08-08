import React from "react";

function Child({ onvlaueChange }) {
  const handlechanage = (e) => {
    // call the call back function from parent
    onvlaueChange(e);
  };
  return (
    <div>
      <h1>Child</h1>
      <input type="text" onChange={handlechanage}></input>
    </div>
  );
}

export default Child;
