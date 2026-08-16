require("dotenv").config();
const path = require("path");
const taskRoutes = require("./src/routes/taskRoutes");
const authRoutes = require("./src/routes/authRoutes");
const errorMiddleware = require("./src/middleware/errorMiddleware");
const express = require("express");

const connectDatabase = require("./src/config/database");


const app = express();
connectDatabase();

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
       message: "Task Management System API is running - TEST"
    });
});
app.use(errorMiddleware);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});