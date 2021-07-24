import "./styles.css";
import { useState } from "react";

function App() {
  // privacy notice
  const [notice, setNotice] = useState("flex");
  // result
  const [result, setResult] = useState(["", ""]);

  let dateInput = "";
  let luckyNum = 0;

  const lucky = (
    <img
      src="https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845546_960_720.jpg"
      alt="Wow"
      width="100%"
      height="200px"
    />
  );

  const notLucky = (
    <img
      src="https://cdn.pixabay.com/photo/2018/05/17/06/22/dog-3407906_960_720.jpg"
      alt="not lucky"
      width="100%"
      height="200px"
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateArray = dateInput.split("-");
    console.log(dateArray);
    let sum = 0;
    // dateArray.map((num) => {
    for (let i = 0; i < dateArray.length; i++) {
      sum = sum + Number(dateArray[i]);
    }
    // });

    if (sum % Number(luckyNum) === 0) {
      setResult(["Cheers !!, Your birthday is lucky.", lucky]);
    } else {
      setResult(["Oops !!, Your birthday is not lucky.", notLucky]);
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Enter your birthdate and lucky number to continue...</h2>
        <form onSubmit={handleSubmit}>
          <div className="birthDateDiv">
            <p>Select your Birth date:</p>
            <input
              onChange={(e) => {
                dateInput = e.target.value;
              }}
              type="date"
              required
            />
          </div>

          <div className="luckyNumDiv">
            <p>Enter your Lucky Number:</p>
            <input
              id="luckyNum"
              onChange={(e) => {
                luckyNum = e.target.value;
              }}
              type="number"
              required
            />
          </div>
          <button type="submit">check</button>
        </form>
      </div>

      <div className="result">
        <label>{result[0]}</label>
        {result[1]}
      </div>
    </div>
  );
}

export default App;
