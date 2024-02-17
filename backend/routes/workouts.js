import express from "express";
import { Workout } from "../models/Workout.js";
import {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutsControllers.js";

const router = express.Router();

/* Get all workouts */
router.get("/", getWorkouts);

/* Add a new workout */
router.post("/", createWorkout)

/* Get a single workout */
router.get("/:id", getWorkout)

/* Update a workout */
router.patch("/:id", updateWorkout)

/* Delete a workout */
router.delete("/:id", deleteWorkout)

export default router;
