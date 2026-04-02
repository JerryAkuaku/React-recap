import TaskPage from "./pages/TaskPage";
import ThemeProvider from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CounterProvider } from "./context/counterContex";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

export default function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <Header />
        <Routes>
          <Route path="/Taskpage" element={<TaskPage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Footer />
      </CounterProvider>
    </ThemeProvider>
  );
}
