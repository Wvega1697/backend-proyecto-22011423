var express = require("express");
var router = express.Router();

let tasks = [];

/* GET - Get all tasks. */
router.get("/getTasks", function (req, res, next) {
  res.json(tasks);
});

/* POST - Add a task. */
router.post("/addTask", (req, res) => {
  const { name, description, dueDate } = req.body;
  if (!name || !description || !dueDate) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const task = {
    id: Math.floor(Date.now() * Math.random()),
    ...req.body,
  };
  tasks.push(task);
  res.json(task);
});

/* DELETE - Remove a task with the id. */
router.delete("/removeTask/:id", function (req, res, next) {
  const id = parseInt(req.params.id);
  const taskId = tasks.findIndex((task) => task.id === id);
  if (taskId === -1) {
    return res.status(404).json({ error: "Task not found" });
  }
  tasks.splice(taskId, 1);
  res.json({ message: "Task removed" });
});

const initialTasks = [
  {
    id: Math.floor(Date.now() * Math.random()),
    name: "Task 1: Actividad 3",
    description: "Crear repositorio para el backend.",
    dueDate: new Date("2024-06-01"),
  },
  {
    id: Math.floor(Date.now() * Math.random()),
    name: "Task 2: Actividad 3",
    description: "Crear el proyecto para el backend.",
    dueDate: new Date("2024-06-15"),
  },
  {
    id: Math.floor(Date.now() * Math.random()),
    name: "Task 3: Actividad 3",
    description: "Push y commit al repositorio.",
    dueDate: new Date("2024-06-30"),
  },
];
tasks = tasks.concat(initialTasks);

module.exports = router;
