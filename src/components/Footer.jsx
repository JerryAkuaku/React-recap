import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
    </footer>
  );
}

export default Footer;
