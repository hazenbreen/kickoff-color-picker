import { useState, useEffect } from "react";
import axios from "axios";

const Palette = (props) => {

  const getColorBoxColor = (hexVal) => {
    return "#" + hexVal
  };

  const deletePalette = async (paletteId) => {
    const { status, data } = await axios.delete("/api/palette/", { params: { id: paletteId } })
    
    if (status === 200) {
      props.refreshPalettes();
    } else {
      throw new Error("Error connecting to server");
    }
  }

  return (
    <tr>
      <td className="paletteId">
        {props.paletteData.id}
      </td>
      {Object.values(props.paletteData).slice(1).map((val, index) => (
        <td key={index}>
          <div className="colorBox" style={{backgroundColor: getColorBoxColor(val)}}>
          </div>
        </td>
      ))}
      <td>
        <button id="deletePaletteButton" onClick={() => deletePalette(props.paletteData.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Palette;
