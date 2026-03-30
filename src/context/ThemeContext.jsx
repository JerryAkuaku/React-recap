import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export { ThemeContext };

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
