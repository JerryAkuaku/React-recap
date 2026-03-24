function Notecard({ task, deleteTask, onDone, editTask }) {
  return (
    <div>
      <div>
        {" "}
        {task.completed === true ? (
          <span style={{ color: "blueviolet" }}>{task.text} </span>
        ) : (
          <span>{task.text} </span>
        )}
        <button onClick={() => onDone(task.id)}>Done</button>{" "}
        <button onClick={() => deleteTask(task.id)}>Delete</button>{" "}
        <button onClick={() => editTask(task.id)}>Edit</button>
      </div>
    </div>
  );
}

export default Notecard;
