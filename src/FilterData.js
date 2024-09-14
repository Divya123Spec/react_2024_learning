
import React, { useState, useEffect } from "react";

 function FilterData() {
  const [data, setData] = useState();
  const [name, setName] = useState("Jhon");
  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      setData(result.users);
      console.log("filtered data", typeof result.users);
      console.log(Array.isArray(result.users));
    };
    FetchData();
  }, []);

  const ChangedValue = (e) => {
    setName(e.target.value);
  };

  let filteredData = [];

  filteredData = data?.filter(
    (item) => item.firstName.toLowerCase() === name.toLowerCase()
  );

  console.log(filteredData);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>{item.firstName}</p>
          </div>
        ))}
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={ChangedValue}
      />
      {filteredData &&
        filteredData?.map((item) => (
          <div key={item.id}>
            <p>{item.firstName}</p>
          </div>
        ))}
    </div>
  );
}

export default FilterData;