import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useCounter } from "../context/counterContex";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { count, increase, decrease } = useCounter();
  return (
    <footer
      style={{
        backgroundColor: theme === "light" ? "#ddd" : "#111",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>© 2024 My App - {theme} mode</p>
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
    </footer>
  );
}

export default Footer;
