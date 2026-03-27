import { useContext, createContext } from "react";

import Notecard from "../components/Notecard";
import { useState } from "react";
import { useEffect } from "react";

const UserContext = createContext();

const TaskPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]); // ← NEW!
  const [name, setName] = useState([]);
  const [nameValue, setNameValue] = useState("");

  let completedTasks = tasks.filter((task) => task.completed === true);

  useEffect(() => {
    if (tasks.length === completedTasks.length) {
      alert("Completed all tasks");
    }
  }, [tasks]);

  function onAdd() {
    // Don't add if empty
    if (inputValue.trim() === "") return;

    // Save task
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]); // ← Add to array
    setInputValue(""); // ← Clear input
  }

  function onDelete(id) {
    return setTasks(tasks.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks(tasks.filter((task) => task.completed !== true));
  }

  function handleDone(id) {
    return setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function onAddName() {
    const newName = { id: Date.now(), text: nameValue };
    setName([...name, newName]);
    setNameValue("");
  }

  function editTask(id) {
    let taskToEdit = tasks.find((task) => task.id === id);
    setInputValue(taskToEdit.text);
    return <button>Save</button>;
  }
  return (
    <UserContext.Provider value={tasks}>
      <div>
        <div>
          <h1>Your Tasks</h1>

          {/* Input Section */}
          <input
            className="text-black"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="type ..."
          />
          <button onClick={onAdd}>Add</button>
          <button onClick={clearCompleted}>Clear Completed</button>

          {/* Empty State */}
          {tasks.length === 0 && <p>No tasks yet!</p>}
          {/* Tasks List */}
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
        </div>
        <div>
          <input
            className="text-black"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <button onClick={onAddName}>Add Name</button>

          <div>
            {name.map((names) => {
              return <div>{names.text} </div>;
            })}
          </div>
          <div>
            {completedTasks.length > 0 ? completedTasks.length : 0} done out of{" "}
            {tasks.length}
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default TaskPage;
