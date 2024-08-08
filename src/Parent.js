import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [name, SetName] = useState("");

  const UpdateValue = (e) => {
    SetName(e.target.value);
    console.log(name);
  };
  return (
    <div>
      <h1>Parent</h1>
      <Child onvlaueChange={UpdateValue}></Child>
    </div>
  );
}

export default Parent;
