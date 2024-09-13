import React from "react";
import useFetch from "./useFetch";

function ApiCall_custom() {
  console.log("ApiCall_custom");
  const { data, loading, error } = useFetch("https://catfact.ninja/fact");
  console.log("data", typeof data);
  return (
    <div>
      {Array.isArray(data) &&
        data?.map((item) => (
          <div>
            <h1 key={item.fact}>hhhb ggggggggggggggggggggggg</h1>
            <h1></h1>
          </div>
        ))}
    </div>
  );
}

export default ApiCall_custom;


// https://dummyjson.com/users