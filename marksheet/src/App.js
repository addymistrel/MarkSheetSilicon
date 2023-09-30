import "./App.css";
import { useState } from "react";

function App() {
  const [input, setinput] = useState("");
  const [inpClass, setinpclass] = useState("inp-div");
  const [downClass, setdownclass] = useState("down-hid");
  const handleClick = () => {
    console.log(input);
    if (input !== "21becf99") {
      alert("Wrong SIC Entered !\nPlease Enter Correct SIC.");
    } else {
      setinpclass("inp-hid");
      setdownclass("download-div");
    }
  };
  return (
    <div className="App">
      <div className="main-div">
        <img
          src="https://silicon.ac.in/wp-content/themes/sit/assets/img/sit-logo.svg"
          alt="error"
        />
        <h1>Marksheet Download Section</h1>
      </div>

      <div className="input-div">
        <h2 style={{ color: "green" }}>Enter Your SIC No.</h2>
        <div className={inpClass}>
          <div>
            <input
              type="text"
              placeholder="Sic no."
              onChange={(e) => setinput(e.target.value.toLocaleLowerCase())}
            />
          </div>
          <div>
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
        <div className={downClass}>
          <a href="/21BECF99.pdf" download="21BECF99.pdf">
            <button
              onClick={() => {
                setdownclass("down-hid");
                setinpclass("inp-div");
              }}
            >
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
