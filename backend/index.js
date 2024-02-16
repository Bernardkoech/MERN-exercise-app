import express from "express";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workouts.js"

const app = express();
dotenv.config()
const port = process.env.PORT;

app.use(express.json());
app.use("/api/workouts",workoutRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
