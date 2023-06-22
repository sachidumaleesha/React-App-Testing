import React, {useState} from "react";

const Content = () => {
  const contentStyle = {
    color: "black",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
  };

  const handleNameChange = () => {
    const name = ["Diwan", "Sachidu", "Maleesha"];
    const int = Math.floor(Math.random() * 3);
    // return name[int];
    setName(name[int]);
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const handleClick2 = (name) => {
    console.log(`Button Clicked by ${name}`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  const handleClick4 = () => {
    setCount(count + 1);
    console.log(count);
  };

  const [name, setName] = useState("Diwan");
  const [count, setCount] = useState(0);

  return (
    <main style={contentStyle} >
      <p onDoubleClick={handleClick}>
        {/* Hello {handleNameChange()}! */}
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change My Name</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2("Diwan")}>Click Me</button>
      <button onClick={(e) => handleClick3(e)}>Click Me</button>
      <button onClick={handleClick4}>Count Me</button>
    </main>
  );
};

export default Content;
