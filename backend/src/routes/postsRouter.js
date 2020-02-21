import express from 'express';
import { Post, Wall } from '../db/models'

const router = express.Router();

// Create post
router.post('/create', async (req, res) => {
  const [newPost, associatedWall] = await Promise.all([
    Post.create({ value: req.body.value }),
    Wall.findByPk(req.body.wallId)
  ]);
  await newPost.setWall(associatedWall);
  res.send(newPost);
});

// Retrieve posts
router.get('/retrieve', async (req, res) => {
  const wall = await Wall.findByPk(req.body.wallId);
  const posts = await wall.getPosts();

  const firstPost = posts[0];
  console.log(firstPost.value);
  const firstPostWall = await firstPost.getWall();
  console.log(firstPostWall.name);

  res.send(posts);
});

export default router;