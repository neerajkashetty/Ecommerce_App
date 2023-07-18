const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const db = require("../sequelize/models");
const fs = require("fs");

const User = db.user;

const signUp = async (req, res) => {
  try {
    const { userName, email, password, firstName, lastName } = req.body;
    const privateKey = fs.readFileSync('./jwtRS256.key', 'utf8');

    //HASH PASS
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const data = {
      username: userName,
      email,
      password: hashedPassword,
      firstName,
      lastName,
    };

    const user = await User.create(data);

    // if user details is saved
    // generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (user) {
      let token = JWT.sign({ id: user.id }, privateKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
        algorithm: "RS256",
        audience: "users",
        issuer: "kankabot"
      });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      return res.json({
        success: true,
        data: {
          userName,
          email,
          authToken: token,
        },
      });
    } else {
      return res.json({ success: false, message: "Details are not correct" });
    }
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const privateKey = fs.readFileSync('./jwtRS256.key', 'utf8');

    const user = await User.findOne({
      where: {
        username: userName,
      },
    });

    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      if (isSame) {
        let token = JWT.sign({ id: user.id }, privateKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
          algorithm: "RS256",
          audience: "users",
          issuer: "kankabot"
        });

        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        return res.json({
          success: true,
          data: {
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userName: user.userName,
            authToken: token,
          },
        });
      } else {
        return res.json({ success: false, message: "Authentication failed" });
      }
    } else {
      return res.json({
        success: false,
        message: "Username or password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signUp,
  signIn,
};
