import { useState, createContext, Children } from "react";

const countNoticeboard = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  const value = { count, increase, decrease };

  return (
    <countNoticeboard.Provider value={value}>
      {children}
    </countNoticeboard.Provider>
  );
}

export { CounterProvider };
export { countNoticeboard };
