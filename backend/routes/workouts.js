import express from "express";

const router = express.Router();

/* Get all workouts */
router.get("/", (req,res) => {
    res.json( {"message": `Get all workouts`});
})

/* Add a new workout */
router.post("/", (req,res) => {
    res.json( {"message": `Add a new workout`});
})

/* Get a single workout */
router.get("/:id", (req,res) => {
    res.json( {"message": `Get a single workout`});
})

/* Update a workout */
router.patch("/:id", (req,res) => {
    res.json( {"message": `Update a workout`});
})

/* Delete a workout */
router.delete("/:id", (req,res) => {
    res.json( {"message": `Delete a workout`});
})


export default router;
