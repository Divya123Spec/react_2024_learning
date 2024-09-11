import React, { useContext } from "react";
import { MyContext } from "./UseContext";

function UseContextChild() {
  const contextValue = useContext(MyContext); // this is the useContext hook
  return (
    <div>
      <h1>UseContextChild</h1>
      <h3>{contextValue}</h3> // this recommended way to use the context value
      <MyContext.Consumer>
        {(value) => {
          return <h3>{value}</h3>;
        }}
      </MyContext.Consumer>
    </div>
  );
}
export default UseContextChild;
