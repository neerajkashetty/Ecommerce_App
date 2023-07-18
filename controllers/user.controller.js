const db = require("../sequelize/models");

const User = db.user;

const getUserInfo = async (req, res) => {
  try {
    const userId = req.id;

    const user = await User.findByPk(userId);

    if (user) {
        res.json({
          success: true,
          data: {
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userName: user.userName,
          },
        });
    } else {
      return res.json({
        success: false,
        message: "Username not found.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserInfo,
};
