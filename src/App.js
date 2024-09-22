import React, { lazy, Suspense } from "react";
import "./App.css";
import Hook_usestate from "./Hook_usestate";
import Hook_useeffect from "./Hook_useeffect";
import UseContext from "./UseContext";
import Controlled_component from "./Controlled_component";
import Parent from "./Parent";
import UseStates from "./UseStates";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
import UseLayout from "./UseLayout";
import UseReducer from "./UseReducer";
import Custom_hook from "./Custom_hook";
import Throttling_Debounce from "./Throttling_Debounce";
import ApiCall_custom from "./ApiCall_custom";
import FilterData from "./FilterData";
import Stopwatch from "./StopWatch";

function App() {
  const CodeSplit = lazy(() => import("./CodeSplit"));

  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
  return (
    <div>
      <div className="App">React App</div>
      <UseStates></UseStates>
      <Hook_usestate />
      <Hook_useeffect />
      <UseContext />
      <Parent />
      <UseRef />
      <UseMemo />
      <UseCallback />
      <UseLayout />
      <UseReducer />
      <Custom_hook />
      <FilterData />
      <Throttling_Debounce />
      <ApiCall_custom />
      <Stopwatch />
      <Controlled_component></Controlled_component>
      <Suspense fallback={<div>Loading...</div>}>
        <CodeSplit />
      </Suspense>
    </div>
  );
}

export default App;

// component life cycle methods uses
// uses of lifecycle methods in react
// 1.componentDidMount() =
// useEffect(() => {
//   //componentDidMount
// }, []); // when you pass empty array it will run only once after the initial render
// useEffect(() => {
//   //componentDidUpdate
// }, [update]);

// useEffect(() => {
//   return() =>{
//     //componentWillUnmount
//   }
// });


// undefined or null: The effect runs after every render, 
// meaning it will execute after the initial render and on every subsequent re-render.
// null: Passing null as the dependency array is technically invalid and will cause an error in development mode,
// such as a warning or an error message. React expects the dependency array to be either an array or omitted.

// useEffect(() => {
//   console.log('This will cause an error');
// }, null); // React will throw an error or warning

// undefined: Similarly, passing undefined as the dependency array is also not valid and will cause an error or warning.
// React does not treat undefined as a valid dependency array.

// useEffect(() => {
//   console.log('This will also cause an error');
// }, undefined); // React will throw an error or warning

// If you do not pass a dependency array to the useEffect hook in React,
// the effect will run after every render of the component. This is different from passing an empty array ([]),
// which causes the effect to run only once after the initial render.

// useEffect(() => {
//   console.log('Effect runs after every render');
// });


// If you pass 0 instead of an array, React will treat it as if no dependency array was passed at all. 
// This causes the useEffect to behave differently from when you pass an empty array.

// Effect runs: On every render because React treats it as undefined,
//  meaning the effect will not be optimized, and it will run after every render.
// Passing 0 is not valid for the dependency array. React expects an array as the second argument.

// When you pass 0, React ignores it and behaves as if no dependency array was provided. 
// In this case, useEffect will execute after every render.