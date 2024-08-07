import React, { lazy, Suspense } from "react";
import "./App.css";
import Hook_usestate from "./Hook_usestate";
import Hook_useeffect from "./Hook_useeffect";
import UseContext from "./UseContext";
import Controlled_component from "./Controlled_component";

function App() {
  const CodeSplit = lazy(() => import("./CodeSplit"));

  return (
    <div>
      <div className="App">React App</div>
      <Hook_usestate />
      <Hook_useeffect />
      <UseContext />
      <Controlled_component></Controlled_component>
      <Suspense fallback={<div>Loading...</div>}>
        <CodeSplit />
      </Suspense>
    </div>
  );
}

export default App;
