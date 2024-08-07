import React from "react";
import "./App.css";
function Controlled_component() {
  const [inputValue, setInputValue] = React.useState("");

  const inputRef = React.useRef();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    const value = inputRef.current.value;
    alert(value);
  };
  return (
    <>
      <div className="App">React App</div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter some text"
      ></input>
      <input type="text" ref={inputRef} placeholder="Enter some text"></input>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Controlled_component;

// COntrolled components
//Whose form elements are controlled by the state of the application.
// In the above example, the input element is controlled by the inputValue state.
// The value of the input element is set to the inputValue state and the onChange event is handled by the handleInputChange function.
// ensuring single source of truth for the value of the input element.

// Uncontrolled components
// Whose form elements are not controlled by the state of the application.
// In the above example, the input element with ref attribute is an uncontrolled component.
// The value of the input element is not controlled by the state of the application.
// The value of the input element can be accessed using the ref attribute.

// difference between controlled and uncontrolled components
// 1.Values are controlled by React state.    1. Values are not controlled by React state.
// 2. Performance is slower.                  2. Performance is faster.
// 3. Code is more readable.                  3. Code is less readable.
// 4. More code is required.                  4. Less code is required.
// 5. More secure.                            5. Less secure.
// 6. Dont depend on the UseRef() hook.       6. Depend on the UseRef() hook.
// 7. Easy to implement validation.           7. Difficult to implement validation.
// 8. re-renders on state changes.            8. Does not re-render on state changes.
