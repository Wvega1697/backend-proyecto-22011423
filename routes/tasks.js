var express = require('express');
var router = express.Router();
const Task = require('../models/Task');

/* GET - Get all tasks. */
router.get("/getTasks", async function (req, res, next) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

/* POST - Add a task. */
router.post("/addTask", async (req, res, next) => {
  const { name, description, dueDate } = req.body;
  if (!name || !description || !dueDate) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const task = new Task({
      name,
      description,
      dueDate: new Date(dueDate)
    });
    await task.save();
    res.json(task);
  } catch (error) {
    next(error);
  }
});

/* DELETE - Remove a task with the id. */
router.delete("/removeTask/:id", async function (req, res, next) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task removed" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
