import React, { useContext, useState, createContext } from "react";
//import Login from "./pages/Login";
//import Demo from "./pages/Demo";
//import Notecard from "./components/Notecard";
import TaskPage from "./pages/TaskPage";
const UserContext = createContext();

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-chatgptDark text-gray-100 p-6">
      <TaskPage />
    </div>
  );
}
