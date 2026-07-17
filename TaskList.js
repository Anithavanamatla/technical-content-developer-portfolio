import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
return ( <ul>
{tasks.map(task => ( <li key={task.id}>
<span
onClick={() => toggleTask(task.id)}
style={{
textDecoration: task.completed ? "line-through" : "none",
cursor: "pointer"
}}
>
{task.text} </span>
<button onClick={() => deleteTask(task.id)}>❌</button> </li>
))} </ul>
);
}

export default TaskList;
