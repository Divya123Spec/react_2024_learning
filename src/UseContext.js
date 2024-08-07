import React, { createContext } from "react";
import UseContextChild from "./UseContextChild";

const MyContext = createContext();

function UseContext() {
  const value = "Hello from Context";
  return (
    <div>
      <h1>UseContext</h1>
      <MyContext.Provider value={value}>
        <UseContextChild />
      </MyContext.Provider>
    </div>
  );
}

export { MyContext };
export default UseContext;

// UseContsxt()
// MyContext.Provider
// Useconect in react provides away to pass the data from parent componentto child component
// without passing the props down manually at every level
// MyContext.Provider is used to provide the data to the child component
// MyContext.Consumer is used to consume the data in the child component

// what is create context? what are provider and consumer?
// createcontext function retruns ans object with provider and consumer properties
// The provider property is resnposible for providing the data to the child component
// The consumer property is responsible for the consuming the data in the child component
