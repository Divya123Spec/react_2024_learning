import React from "react";

function Header() {
  console.log("Header component");
  return (
    <div>
      <h1>Header component</h1>
    </div>
  );
}

export default React.memo(Header);
