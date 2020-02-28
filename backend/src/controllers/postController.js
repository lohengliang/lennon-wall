import { Post, Wall } from "../db/models";

export const createPost = async (req, res) => {
  const [newPost, associatedWall] = await Promise.all([
    Post.create({
      value: req.body.value,
      SignedInUsername: req.body.signedInUsername
    }),
    Wall.findOne({
      where: {
        name: req.body.wallName
      }
    })
  ]);
  await newPost.setWall(associatedWall);
  res.send(newPost);
};

export const retrievePost = async (req, res) => {
  const wall = await Wall.findOrCreate({
    where: {
      name: req.query.wallName
    }
  });
  const posts = await wall[0].getPosts();
  res.send(posts);
};
