const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
   title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
},

    description: {
    type: String,
    default: "",
    trim: true,
    maxlength: 500,
},

    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },

    dueDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);