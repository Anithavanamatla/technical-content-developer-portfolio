import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import "./styles.css";

function App() {
const [tasks, setTasks] = useState([]);
const [filter, setFilter] = useState("all");

useEffect(() => {
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
setTasks(savedTasks);
}, []);

useEffect(() => {
localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

const addTask = (text) => {
setTasks([...tasks, { id: Date.now(), text, completed: false }]);
};

const toggleTask = (id) => {
setTasks(tasks.map(task =>
task.id === id ? { ...task, completed: !task.completed } : task
));
};

const deleteTask = (id) => {
setTasks(tasks.filter(task => task.id !== id));
};

const filteredTasks = tasks.filter(task => {
if (filter === "completed") return task.completed;
if (filter === "pending") return !task.completed;
return true;
});

return ( <div className="app"> <h1>Smart Task Manager</h1> <TaskInput addTask={addTask} /> <Filter setFilter={setFilter} /> <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} /> </div>
);
}

export default App;
