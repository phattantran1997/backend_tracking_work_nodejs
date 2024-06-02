require("dotenv").config();
const jwt = require("jsonwebtoken");

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader;

  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.error(err);
      return {code: res.sendStatus(403), data : err};
    }
    next();
  });

};