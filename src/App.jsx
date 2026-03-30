//import Notecard from "./components/Notecard";
import TaskPage from "./pages/TaskPage";
import ThemeProvider from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-chatgptDark text-gray-100 p-6">
        <Header />
        <TaskPage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
