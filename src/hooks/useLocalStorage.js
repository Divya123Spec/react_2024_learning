import React, { useState, useEffect } from "react";

const useLocalStorage = (key, intialValue) => {
  const [name, setName] = useState(
    localStorage.getItem("intialValue")
      ? localStorage.getItem("intialValue")
      : ""
  );
  useEffect(() => {
    localStorage.setItem(key, name);
  }, [name, key]);
  return [name, setName];
};

export default useLocalStorage;
