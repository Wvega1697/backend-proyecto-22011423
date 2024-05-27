var express = require("express");
var router = express.Router();
const Goal = require("../models/Goal");

/* GET - Get all goals. */
router.get("/getGoals", async function (req, res, next) {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    next(error);
  }
});

/* DELETE - Remove a goal with the id. */
router.delete("/removeGoal/:id", async function (req, res, next) {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);
    if (!goal) {
      return res.status(404).json({ error: "Goal not found" });
    }
    res.json({ message: "Goal removed" });
  } catch (error) {
    next(error);
  }
});

/* POST - Add a goal. */
router.post("/addGoal", async (req, res, next) => {
  const { name, description, dueDate } = req.body;
  if (!name || !description || !dueDate) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const goal = new Goal({
      name,
      description,
      dueDate: new Date(dueDate),
    });
    await goal.save();
    res.json(goal);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
