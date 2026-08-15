require("dotenv").config();

const taskRoutes = require("./src/routes/taskRoutes");
const authRoutes = require("./src/routes/authRoutes");

const express = require("express");

const connectDatabase = require("./src/config/database");


const app = express();
connectDatabase();

app.use(express.json());
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
       message: "Task Management System API is running - TEST"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});