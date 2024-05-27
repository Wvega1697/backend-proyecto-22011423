const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true }
});

module.exports = mongoose.model('Goal', GoalSchema);
