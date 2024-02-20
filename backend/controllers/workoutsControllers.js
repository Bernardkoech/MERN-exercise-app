import Workout from "../models/Workout.js";

/* Get all workouts */
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.header("Access-Control-Allow-Origin", "*");
    // Sending back the response with data in it
    return res.status(200).json({
      count: workouts.length,
      data: workouts,
    });

  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

/* Get a single workout */
export const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ message: "No workout found" });
    }
    return res.status(200).json(workout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

/*  Create a new workout */
export const createWorkout = async (req, res) => {
  try {
    if (!req.body.title || !req.body.reps || !req.body.load) {
      return res
        .status(400)
        .send({ message: "please send all reuired fields" });
    }
    const newWorkout = {
      title: req.body.title,
      reps: req.body.reps,
      load: req.body.load,
    };

    const workout = await Workout.create(newWorkout);

    return res.status(201).send(workout);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

/*  Update an existing workout */
/* Update an existing workout */
export const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, reps, load } = req.body;

    // Check if any of the fields is missing
    if (!title || reps === undefined || load === undefined) {
      return res.status(400).send({ message: "Fill all fields" });
    }

    // Update only the provided fields
    const updateFields = {};
    if (title) updateFields.title = title;
    if (reps !== undefined) updateFields.reps = reps;
    if (load !== undefined) updateFields.load = load;

    // Update the workout
    const result = await Workout.findByIdAndUpdate(id, updateFields, { new: true });

    if (!result) {
      return res.status(404).json({ message: "Workout not found." });
    }

    return res.status(200).send({ message: "Successfully updated!", workout: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};


/*  Delete a workout */
export const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Workout.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Workout not found." });
    }
    return res.status(200).send({ message: "Workout deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
