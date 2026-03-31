import { useState, useEffect, useContext } from "react";
import Notecard from "../components/Notecard";
import { ThemeContext } from "../context/ThemeContext";

const TaskPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  let completedTasks = tasks.filter((task) => task.completed === true);

  useEffect(() => {
    if (tasks.length > 0 && tasks.length === completedTasks.length) {
      alert("Completed all tasks");
    }
  }, [tasks]);

  function onAdd() {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  }

  function onDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks(tasks.filter((task) => task.completed !== true));
  }

  function handleDone(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function onAddName() {
    if (nameValue.trim() === "") return;

    const newName = { id: Date.now(), text: nameValue };
    setName([...name, newName]);
    setNameValue("");
  }

  function editTask(id) {
    let taskToEdit = tasks.find((task) => task.id === id);
    setInputValue(taskToEdit.text);
  }

  return (
    <div
      className={
        theme === "light"
          ? "min-h-screen flex items-center justify-center bg-white text-black-100 p-6"
          : "min-h-screen flex items-center justify-center bg-chatgptDark text-gray-100 p-6"
      }
    >
      <div className="flex flex-col gap-6">
        <h1>Your Tasks</h1>

        {/* ✅ Input Sections (FIXED LAYOUT) */}
        <div className="flex flex-col gap-4">
          {/* Task Input */}
          <div className="flex gap-2">
            <input
              className="text-black px-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="type ..."
            />
            <button onClick={onAdd}>Add</button>
            <button onClick={clearCompleted}>Clear</button>
          </div>
          <div>
            {tasks.map((task) => (
              <Notecard
                key={task.id}
                task={task}
                deleteTask={onDelete}
                onDone={handleDone}
                editTask={editTask}
              />
            ))}
          </div>

          {/* Name Input */}
          <div className="flex gap-2">
            <input
              className="text-black px-2"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Enter name"
            />
            <button onClick={onAddName}>Add Name</button>
          </div>
          {/* Names List */}
          <div>
            {name.map((names) => (
              <div key={names.id}>{names.text}</div>
            ))}
          </div>

          {/* Stats */}
          <div>
            {completedTasks.length} done out of {tasks.length}
          </div>
        </div>

        {/* Empty State */}
        {tasks.length === 0 && <p>No tasks yet!</p>}

        {/* Tasks List */}
      </div>
    </div>
  );
};

export default TaskPage;
