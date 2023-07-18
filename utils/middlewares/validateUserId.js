const db = require("../../sequelize/models");

const User = db.user;

async function validateUserId(req, res, next) {
  await User.findOne({ id: req.id }).then((data) => {
    if (!data || data == "") {
      return res.json({ success: false, message: "Unknown user" });
    } else {
      req.user = {
        userId: data.dataValues.id,
        firstName: data.dataValues.firstName,
        lastName: data.dataValues.lastName,
        email: data.dataValues.email,
        userName: data.dataValues.username,
      };
      next();
    }
  });
}

module.exports = validateUserId;
