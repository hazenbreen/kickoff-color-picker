import { useState, useEffect } from "react";
import axios from "axios";

import s from "./styles.module.css";

// this is just an example
// feel free to use class based components and whatever paradigms you're most comfortable with
const Welcome = () => {
  // const [greeting, setGreeting] = useState(null);
  // const [value, setValue] = useState("");

  const [rValue, setRValue] =  useState(127)
  const [gValue, setGValue] =  useState(127)
  const [bValue, setBValue] =  useState(127)

  // useEffect(() => {
    // const fetchGreeting = async () => {
    //   const { status, data } = await axios.get("/api/greeting");

    //   if (status === 200) {
    //     setGreeting(data);
    //   } else {
    //     throw new Error("Error connecting to server");
    //   }
  // });

  //   fetchGreeting();
  // }, [setGreeting, axios]);

  // const updateGreeting = async () => {
  //   if (!value) return;

  //   const { status, data } = await axios.put("/api/greeting", {
  //     id: greeting.id,
  //     body: value,
  //   });

  //   setGreeting(data);
  //   setValue("");
  // };

  const updateRVal = (colorVal) => {
    setRValue(colorVal)
    // updateColorBox()
  };

  const updateGVal = (colorVal) => {
    setGValue(colorVal)
    updateColorBox()
  };

  const updateBVal = (colorVal) => {
    setBValue(colorVal)
    updateColorBox()
  };

  // if (!greeting) return null;

  const updateColorBox = () => {
    const elem = document.getElementById("colorBox");
    elem.style.backgroundColor = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
  };


  return (
    <div className={s.welcomeContainer}>
      <table id="pickerTable">
        <tbody>
          <tr>
            <td>
              <b className="colorLabel">RED</b>
              <br />
              <input
                id="rRange"
                className="slider"
                type="range"
                min="0"
                max="255"
                value={rValue}
                onChange = {(ev) => updateRVal(ev.target.valueAsNumber)}
              />
              <br />
              <i className="colorValue">{rValue}</i>
            </td>
            <td>  
              <b className="colorLabel">GREEN</b>
              <br />
              <input
                id="gRange"
                className="slider"
                type="range"
                min="0"
                max="255"
                value={gValue}
                onChange = {(ev) => updateGVal(ev.target.valueAsNumber)}
              />
              <br />
              <i className="colorValue">{gValue}</i>
            </td>
            <td>
              <b className="colorLabel">BLUE</b>
              <br />
              <input
                id="bRange"
                className="slider"
                type="range"
                min="0"
                max="255"
                value={bValue}
                onChange = {(ev) => updateBVal(ev.target.value)}
              />
              <br />
              <i className="colorValue">{bValue}</i>
            </td>
            <td>
              <div id="colorBox">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

  // <h1 className={s.welcome}>{greeting.body}</h1>
  // <div className={s.form}>
  //   <input
  //     className={s.input}
  //     value={value}
  //     onChange={(ev) => setValue(ev.target.value)}
  //     placeholder="Enter a new greeting"
  //   />
  //   <button className={s.button} onClick={updateGreeting} disabled={!value}>
  //     Update
  //   </button>
  // </div>

export default Welcome;
