require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_EXPIRE_AC = "30d";

const generateAccessToken = (user) => {
  console.log("Generating access token for user:", user);
  const accessToken = jwt.sign({user: user}, process.env.JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE_AC,
  });
  console.log("Generated access token:", accessToken);
  return accessToken;
};

let logout = (username) => {
  return new Promise(async (resolve, reject) => {
    // Your logout logic here
  });
};

module.exports = {
  generateAccessToken,
  logout,  
};
