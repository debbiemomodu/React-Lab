import { useState } from "react";

function TodoForm() {
  const [task, setTask] = useState("");     // input value
  const [tasks, setTasks] = useState([]);   // list of tasks

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return; // avoid empty tasks

    setTasks([...tasks, task]); // add task to list
    setTask(""); // clear input
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoForm;



