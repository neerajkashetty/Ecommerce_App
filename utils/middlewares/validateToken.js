const JWT = require("jsonwebtoken");
const fs = require("fs");

const privateKey = fs.readFileSync('./jwtRS256.key', 'utf8');

async function validateToken(req, res, next) {
  const authToken = req.headers["authorization"];

  if (authToken == null) return res.json({ Message: "Access denied" });

  JWT.verify(authToken, privateKey, async (err, token) => {
    if (err) return res.json({ success: false, message: err });
    req.id = token["id"];
    next();
  });
}

module.exports = validateToken;