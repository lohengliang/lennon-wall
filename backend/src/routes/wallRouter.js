import express from "express";
import { Wall } from "../db/models";

const router = express.Router();

// Create wall and send it back in response
router.post("/create", async (req, res) => {
  const newWall = await Wall.create({ name: req.body.name });
  res.send(newWall);
});

// Retrieve wall
router.get("/retrieve", async (req, res) => {
  const wall = await Wall.findOne({
    where: {
      name: req.query.wallName
    }
  });
  res.send(wall);
});

// lw.com/walls/<wall_name>

export default router;
