import { useState, useEffect } from "react";
import axios from "axios";

import RGBColorPicker from "./RGBColorPicker.js"
import Palette from "./Palette.js"
import s from "./styles.module.css";

const ColorPickerApp = () => {
  const [picker1Color, setPicker1Color] =  useState("7f7f7f")
  const [picker2Color, setPicker2Color] =  useState("7f7f7f")
  const [picker3Color, setPicker3Color] =  useState("7f7f7f")
  const [picker4Color, setPicker4Color] =  useState("7f7f7f")
  const [picker5Color, setPicker5Color] =  useState("7f7f7f")
  const [palettes, setPalettes] = useState([])

  useEffect(() => {
    fetchPalettes();
  }, []);


  const savePalette = async () => {
    const { status, data } = await axios.post("/api/palette", {
      color1: picker1Color,
      color2: picker2Color,
      color3: picker3Color,
      color4: picker4Color,
      color5: picker5Color
    }).then(fetchPalettes());
  }

  const fetchPalettes = async () => {
    const { status, data } = await axios.get("/api/palette");

    if (status === 200) {
      setPalettes(data);
    } else {
      throw new Error("Error connecting to server");
    }
  };

  return (
    <div className={s.welcomeContainer}>
      <h2>Create a Palette</h2>
      <table id="pickerTable">
        <tbody>
          <RGBColorPicker pickerNumber="1" passPickerColor={setPicker1Color} />
          <RGBColorPicker pickerNumber="2" passPickerColor={setPicker2Color} />
          <RGBColorPicker pickerNumber="3" passPickerColor={setPicker3Color} />
          <RGBColorPicker pickerNumber="4" passPickerColor={setPicker4Color} />
          <RGBColorPicker pickerNumber="5" passPickerColor={setPicker5Color} />
        </tbody>
      </table>
      <button id="savePaletteButton" onClick={savePalette}>
        Save Your Palette
      </button>
      <br />
      <br />
      <br />
      <h2>Saved Palettes</h2>
      <table id="paletteTable">
        <thead>
          <tr>
            <td><b>Palette ID</b></td>
            <td><b>Color 1</b></td>
            <td><b>Color 2</b></td>
            <td><b>Color 3</b></td>
            <td><b>Color 4</b></td>
            <td><b>Color 5</b></td>
          </tr>
        </thead>
        <tbody>
          {palettes.map((palette) => (
            <Palette paletteData={palette} refreshPalettes={fetchPalettes} />
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default ColorPickerApp;
