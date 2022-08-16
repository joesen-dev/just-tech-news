const User = require("./User");
const Post = require("./Post");

// create associations
// * this is a one-to-many relationship
// * one User to many Posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// * this is a one-to-one relationship
// * one Posts to one User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
