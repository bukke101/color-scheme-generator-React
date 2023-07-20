import { useState } from "react";
import Header from "./components/Header";
import ColorSchemeCard from "./components/ColorSchemeCard";

import "../style.css";

function App() {
  const [colorState, setColorState] = useState({
    colors: [],
    inputColor: "#ffffff",
    colorScheme: "#ffffff",
    mode: "monochrome",
  });
  const { colors, inputColor, mode } = colorState;

  async function fetchColors() {
    const currentColor = inputColor.replace("#", "");
    try {
      const res = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${mode}&count=5`
      );
      const data = await res.json();
      setColorState((prevState) => ({ ...prevState, colors: data.colors }));
    } catch (error) {
      return "Error fetching colors:", error;
    }
  }

  function handleSetColor() {
    fetchColors();
  }

  const colorElements = colors.map((color) => (
    <ColorSchemeCard
      key={color.hex.value}
      hexValue={color.hex.value}
      style={{ backgroundColor: color.hex.value }}
    />
  ));

  function handleChange(e) {
    const { name, value } = e.target;
    setColorState((prevColors) => ({
      ...prevColors,
      [name]: value,
    }));
  }

  return (
    <div className="wrapper">
      <Header
        color={inputColor}
        mode={mode}
        handleColorChange={handleChange}
        setColorScheme={handleSetColor}
        handleModeChange={handleChange}
      />
      <div className="color-card-container">{colorElements}</div>
    </div>
  );
}

export default App;
