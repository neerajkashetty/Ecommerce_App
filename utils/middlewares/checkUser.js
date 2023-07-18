const db = require("../../sequelize/models");

const User = db.user;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const checkUser = async (req, res, next) => {
  try {
    const username = await User.findOne({
      where: {
        username: req.body.userName,
      },
    });
    
    if (username) {
      return res.json({success: false,  message: "Username already taken."});
    }

    const email = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (email) {
      return res.json({success: false, message: "Email already taken."});
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = checkUser;

