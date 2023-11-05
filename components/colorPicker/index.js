import { useState, useEffect } from "react";
import axios from "axios";

import RGBColorPicker from "./RGBColorPicker.js"
import s from "./styles.module.css";

const ColorPickerApp = () => {
  const [picker1Color, setPicker1Color] =  useState("#7f7f7f")
  const [picker2Color, setPicker2Color] =  useState("#7f7f7f")
  const [picker3Color, setPicker3Color] =  useState("#7f7f7f")
  const [picker4Color, setPicker4Color] =  useState("#7f7f7f")
  const [picker5Color, setPicker5Color] =  useState("#7f7f7f")

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

  
  // if (!greeting) return null;

  const savePalette = () => {

  }
  


  return (
    <div className={s.welcomeContainer}>
      <table id="pickerTable">
        <tbody>
          <RGBColorPicker pickerNumber="1" passPickerColor={setPicker1Color}/>
          <RGBColorPicker pickerNumber="2" passPickerColor={setPicker2Color}/>
          <RGBColorPicker pickerNumber="3" passPickerColor={setPicker3Color}/>
          <RGBColorPicker pickerNumber="4" passPickerColor={setPicker4Color}/>
          <RGBColorPicker pickerNumber="5" passPickerColor={setPicker5Color}/>
        </tbody>
      </table>
      <button id="savePaletteButton" onClick={savePalette}>
        Save Your Palette
      </button>
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

export default ColorPickerApp;
