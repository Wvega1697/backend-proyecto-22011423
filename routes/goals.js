var express = require("express");
var router = express.Router();

let goals = [];

/* GET - Get all goals. */
router.get("/getGoals", function (req, res, next) {
  res.json(goals);
});

/* DELETE - Remove a goal with the id. */
router.delete("/removeGoal/:id", function (req, res, next) {
  const id = parseInt(req.params.id);
  const goalId = goals.findIndex((goal) => goal.id === id);
  if (goalId === -1) {
    return res.status(404).json({ error: "Goal not found" });
  }
  goals.splice(goalId, 1);
  res.json({ message: "Goal removed" });
});

/* POST - Add a goal. */
router.post("/addGoal", (req, res) => {
  const { name, description, dueDate } = req.body;
  if (!name || !description || !dueDate) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const goal = {
    id: Math.floor(Date.now() * Math.random()),
    ...req.body,
  };
  goals.push(goal);
  res.json(goal);
});

module.exports = router;

const initialGoals = [
  {
    id: Math.floor(Date.now() * Math.random()),
    name: "Goal 1: Actividad 3",
    description: "Sacar 100 en la actividad 3.",
    dueDate: new Date("2024-07-31"),
  },
  {
    id: Math.floor(Date.now() * Math.random()),
    name: "Goal 2: Actividad 3",
    description: "Sacar 100 en los examenes.",
    dueDate: new Date("2024-08-31"),
  },
  {
    id: Math.floor(Date.now() * Math.random()),
    name: "Goal 3: Actividad 3",
    description: "Sacar 100 en el curso.",
    dueDate: new Date("2024-09-30"),
  },
];

goals = goals.concat(initialGoals);
