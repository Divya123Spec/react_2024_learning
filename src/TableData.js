import "./styles.css";
import React, { useEffect, useState } from "react";

function TableData() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    setData(result);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <td>ID</td>
            <td>title</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default TableData;