import React from "react";

const Header = () => {
  const headerColor = {
    backgroundColor: "royalBlue",
    color: "white",
    textAlign: "center",
    alignItems: "center",
  };

  return (
    <header style={headerColor}>
      <h1>Groceries List</h1>
    </header>
  );
};

export default Header;
