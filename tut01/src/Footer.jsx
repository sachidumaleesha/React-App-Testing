import React from "react";

const Footer = () => {
  const today = new Date();

  const footerStyle = {
    backgroundColor: "royalBlue",
    color: "white",
    textAlign: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
