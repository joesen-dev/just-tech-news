const Vote = require("./Vote");
const User = require("./User");
const Post = require("./Post");

// create associations
// his is a one-to-many relationship
// one User to many Posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// this is a one-to-one relationship
// one Posts to one User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// * many-to-many relationship
User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});

// many-to-many relationship
Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Vote };
