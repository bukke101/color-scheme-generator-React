import modes from "../modes";

export default function Header({
  setColorScheme,
  handleColorChange,
  handleModeChange,
  color,
  mode,
}) {
  return (
    <header className="header">
      <input
        type="color"
        name="inputColor"
        value={color}
        onChange={handleColorChange}
        className="color-input"
      />
      <select
        name="mode"
        className="scheme-list"
        value={mode}
        onChange={handleModeChange}
      >
        {modes.map((mode) => (
          <option key={mode} value={mode}>
            {mode}
          </option>
        ))}
      </select>
      <button className="color-btn" onClick={setColorScheme}>
        Get color scheme
      </button>
    </header>
  );
}
