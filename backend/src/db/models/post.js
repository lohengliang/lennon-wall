module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      value: DataTypes.STRING,
      SignedInUsername: DataTypes.STRING
    },
    {}
  );
  // Each post belongs to a wall
  Post.associate = models => {
    Post.belongsTo(models.Wall);
  };
  return Post;
};
