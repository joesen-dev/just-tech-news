const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// create our User model
class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create fields/columns for User model
User.init(
  {
    // * define an id column
    id: {
      type: DataTypes.INTEGER, // use the special Sequelize DataTypes object provide what type of data it is
      allowNull: false, // this is the equivalent of SQL's `NOT NULL` option
      primaryKey: true, // instruct that this is the Primary Key
      autoIncrement: true, // turn on auto increment
    },
    // * define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //  * define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // there cannot be any duplicate email values in this table
      // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true,
      },
    },
    // * define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // the password must be at least four characters long
        len: [4],
      },
    },
  },

  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },

    sequelize, // pass in our imported sequelize connection (the direct connection to our database)
    timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, // don't pluralize name of database table
    underscored: true, // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    modelName: "user", // make it so our model name stays lowercase in the database
  }
);

module.exports = User;
