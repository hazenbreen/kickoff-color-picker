import { useState, useEffect } from "react";
var convert = require('color-convert');

const RGBColorPicker = (props) => {
  const colorBoxId = "colorBox" + props.pickerNumber

  const [rValue, setRValue] =  useState(127)
  const [gValue, setGValue] =  useState(127)
  const [bValue, setBValue] =  useState(127)

  const updateRVal = (colorVal) => {
    setRValue(colorVal)
    updateColorBox()
  };

  const updateGVal = (colorVal) => {
    setGValue(colorVal)
    updateColorBox()
  };

  const updateBVal = (colorVal) => {
    setBValue(colorVal)
    updateColorBox()
  };

  const updateColorBox = () => {
    const elem = document.getElementById(colorBoxId);
    elem.style.backgroundColor = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

    const hexVal = convert.rgb.hex(rValue, gValue, bValue)
    props.passPickerColor(hexVal)
  };


  return (
    <tr>
      <td>
        <i className="colorLabel">red</i>
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
        <i className="colorLabel">green</i>
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
        <i className="colorLabel">blue</i>
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
        <div className="colorBox" id={colorBoxId}>
        </div>
      </td>
    </tr>
  );
};

export default RGBColorPicker;
