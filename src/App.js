import React, { lazy, Suspense } from "react";
import "./App.css";
import Hook_usestate from "./Hook_usestate";
import Hook_useeffect from "./Hook_useeffect";
import UseContext from "./UseContext";
import Controlled_component from "./Controlled_component";
import { use } from "i18next";
import Parent from "./Parent";

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
      <Hook_usestate />
      <Hook_useeffect />
      <UseContext />
      <Parent />
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
