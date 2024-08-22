import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const Custom_hook = () => {
  const [name, setName] = useLocalStorage("username", "");
  return (
    <div>
      <h1>Custom_hook</h1>
      <>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </>
    </div>
  );
};

export default Custom_hook;
