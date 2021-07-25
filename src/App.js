import "./styles.css";
import { useState } from "react";
import sad from "./sad.png";
import smiley from "./smiley.png";
import baloons from "./baloons.png";
import micky from "./micky.png";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin
} from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";

function App() {
  // privacy notice
  const [notice, setNotice] = useState("flex");
  // result
  const [result, setResult] = useState(["", ""]);

  let dateInput = "";
  let luckyNum = 0;

  const lucky = <img src={smiley} alt="Wow" width="80%" height="200px" />;

  const notLucky = <img src={sad} alt="not lucky" width="80%" height="200px" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateArray = dateInput.split("-");
    console.log(dateArray);
    let sum = 0;

    for (let i = 0; i < dateArray.length; i++) {
      sum = sum + Number(dateArray[i]);
    }

    if (sum % Number(luckyNum) === 0) {
      setResult(["Cheers !!, Your birthday is lucky.", lucky]);
    } else {
      setResult(["Oops !!, Your birthday is not lucky.", notLucky]);
    }
  };

  return (
    <div
      className="App"
      // style={{
      //   backgroundImage: `url(${micky})`
      // }}
    >
      {/* <img id="micky" src={micky} alt="decoration" /> */}
      <div
        style={{
          backgroundImage: `url("${baloons}")`,
          backgroundSize: "cover",
          // backgroundImage: `url("${micky}")`,
          minHeight: "88.5vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <p className="heading">Is your Birthday Lucky?</p>
        <div id="notice" style={{ display: `${notice}` }}>
          <div>
            <strong>We respect privacy! </strong> We are not storing your data.
          </div>

          <div
            id="cancel"
            onClick={() => {
              setNotice("none");
            }}
            style={{
              paddingLeft: "0rem",
              cursor: "pointer",
              fontSize: "0.8rem"
            }}
          >
            <span>&#10060;</span>
          </div>
        </div>
        <div>
          <h2>Enter your birthdate and lucky number to checkout...</h2>
          <form onSubmit={handleSubmit}>
            <div className="birthDateDiv">
              <p className="label">Select your Birth date:</p>
              <input
                onChange={(e) => {
                  dateInput = e.target.value;
                }}
                type="date"
                required
              />
            </div>

            <div className="luckyNumDiv">
              <p className="label">Enter your Lucky Number:</p>
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
      <footer>
        <div className="footerDiv">-Connect with me on-</div>
        <ul>
          <li>
            <a className="footerLink" href="https://github.com/VLeads/">
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a className="footerLink" href="https://twitter.com/Vishalk01234">
              <AiFillTwitterCircle />
            </a>
          </li>
          <li>
            <a
              className="footerLink"
              href="https://www.linkedin.com/in/vishalkumar28/"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a className="footerLink" href="https://vishalkumar.netlify.app/">
              <FaBriefcase />
            </a>
          </li>
        </ul>
        <div class="copyright">
          &copy; Vishal Kumar 2021 |{" "}
          <a
            href="#notice"
            style={{ color: "black", marginTop: "0" }}
            onClick={() => setNotice("flex")}
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
