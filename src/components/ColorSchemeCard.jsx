import { useState } from "react";
export default function ColorSchemeCard({ style, hexValue }) {
  const [copy, setCopy] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText(hexValue);
    setCopy(true);

    setTimeout(() => setCopy(false), 1000);
  };
  return (
    <div>
      <div className="hex-colors" onClick={handleCopyClick} style={style}></div>
      <div className="hex-name">{hexValue}</div>
      {copy && <span className="copy">Copied</span>}
    </div>
  );
}
