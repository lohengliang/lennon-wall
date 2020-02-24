import express from "express";
import { createPost, retrievePost } from "../controllers/postController";

const router = express.Router();

// Create post
router.post("/create", (req, res) => createPost(req, res));

// Retrieve posts
router.get("/retrieve", (req, res) => retrievePost(req, res));

export default router;
