import "./styles.css";
import React, { useState, useContext } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [task, setTask] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButton = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const toggleEditMode = () => {};

  const handleDelete = (item) => {
    const updateTask = items.filter((name) => name !== item);
    setItems(updateTask);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        value={inputValue}
        placeholder="enter text"
        onChange={handleChange}
      />
      <button onClick={handleButton}> Add</button>

      <ul>
        {items.map((item, index) => (
          <>
            <li key={index}>{item}</li>
            <button onClick={() => toggleEditMode()}>Edit</button>
            <button onClick={() => handleDelete(item)}>Completed</button>
          </>
        ))}{" "}
      </ul>
    </div>
  );
}
