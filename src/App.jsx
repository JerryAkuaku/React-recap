//import Notecard from "./components/Notecard";
import TaskPage from "./pages/TaskPage";
import ThemeProvider from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <TaskPage />
      <Footer />
    </ThemeProvider>
  );
}
