import React, { createContext, useContext } from "react";
import UseContextChild from "./UseContextChild";

const MyContext = createContext();

function UseContext() {
  const value = "Hello from Context Parent Compoent ";
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
// Useconect in react provides away to pass the data from parent component to child component
// without passing the props down manually at every level
// MyContext.Provider is used to provide the data to the child component
// MyContext.Consumer is used to consume the data in the child component

// what is create context? what are provider and consumer?
// createcontext function retruns ans object with provider and consumer properties
// The provider property is resnposible for providing the data to the child component
// The consumer property is responsible for the consuming the data in the child component

//
// useContext is a react hook that allows you to access the data from any component without explicity passing down
// the props to the component
// useConext is used to manage the global data in react application
