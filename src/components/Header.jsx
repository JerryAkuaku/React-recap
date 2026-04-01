import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { countNoticeboard } from "../context/counterContex";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { count, increase, decrease } = useContext(countNoticeboard);

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <div>{count}</div>
      <button
        onClick={() => {
          increase();
        }}
      >
        {" "}
        Increase
      </button>{" "}
      <button
        onClick={() => {
          decrease();
        }}
      >
        {" "}
        Decrease
      </button>
    </header>
  );
}

export default Header;
