# Mini Project Assignment: Student Task Manager (Frontend)

## Objective

Build a simple task manager using HTML, CSS, and JavaScript.

---

## Requirements

### Functional Requirements

* Add a new task
* Delete a task
* Mark task as completed
* Display all tasks

---

### Technical Requirements

* Use HTML for structure
* Use CSS for styling
* Use JavaScript for functionality
* Store tasks in localStorage

---

## Bonus Features

* Filter tasks (All / Completed / Pending)
* Add due dates
* Responsive design

---

## Expected Output

A working web application where users can manage daily tasks.

---

## Evaluation Criteria

* Code quality
* UI design
* Functionality
* Use of JavaScript logic
* Proper use of localStorage

---

## Sample Starter Code

```html
<input type="text" id="taskInput" placeholder="Enter task">
<button onclick="addTask()">Add</button>
<ul id="taskList"></ul>

<script>
function addTask() {
    let input = document.getElementById("taskInput");
    let li = document.createElement("li");
    li.textContent = input.value;
    document.getElementById("taskList").appendChild(li);
}
</script>
```
