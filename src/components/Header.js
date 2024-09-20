import React from "react";

function Header() {
  console.log("Header component");
  return (
    <div>
      <h1>Header component</h1>
      <button onClick={newFunc}>Call newFunc</button>
    </div>
  );
}

export default React.memo(Header);

//  if you click here it call the newFunc and it will not re render the component
