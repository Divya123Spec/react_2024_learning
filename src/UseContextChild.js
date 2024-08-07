import React, { useContext } from "react";
import { MyContext } from "./UseContext";

function UseContextChild() {
  const contextValue = useContext(MyContext);
  return (
    <div>
      <h1>UseContextChild</h1>
      <h3>{contextValue}</h3>
      {/* <MyContext.Consumer>
        {(contextValue) => <h3>{contextValue}</h3>}
        </MyContext.Consumer> */}
    </div>
  );
}
export default UseContextChild;
