import express from "express";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workouts.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/workouts", workoutRoutes);
app.use(
  cors({
    origin: "http://localhost:5555",
    methods: ["GET", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("conected to database");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
