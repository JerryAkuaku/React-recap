//import Notecard from "./components/Notecard";
import TaskPage from "./pages/TaskPage";
import ThemeProvider from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CounterProvider } from "./context/counterContex";

export default function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <Header />
        <TaskPage />
        <Footer />
      </CounterProvider>
    </ThemeProvider>
  );
}
