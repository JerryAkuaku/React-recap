import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useCounter } from "../context/counterContex";
import { Link } from "react-router-dom";
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { count, increase, decrease } = useCounter();

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
      <nav>
        <Link to="/Taskpage">Home</Link>
        <Link to="/Login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
