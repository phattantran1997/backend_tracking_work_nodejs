import  * as  authService from "./auth_service";
import * as userService from "../users/users_service.js"
var HttpStatusCode = require("../../helper/HttpStatusCode.js");
const jwt = require('jsonwebtoken');

require("dotenv").config();

export async function register (req, res)  {
  if (!req.body.username) {
    return res
      .status(HttpStatusCode.Validation)
      .json({ message: "Missing username required parameters" });
  }

  try {
    let newRecord = await userService.createOne(req.body);
    return res.status(newRecord.errCode).json(newRecord);
  } catch (error) {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER)
      .json({ message: error.message });
  }
};

export async function checkTokenValid(req, res) {
  const token = req.headers["authorization"];;
  if (!token) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = decoded.user;

    if (!user) {
      return res.status(404).json({ message: 'User not found in token.' });
    }

    // Return the user's role in the response
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ message: 'Failed to authenticate token.' });
  }
}

export async function login (req, res)  {
  let username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    return res.status(500).json({
      message: "Missing inputs parameter!",
    });
  }

  try {
    let userData = await userService.login({username, password});
    return res.status(userData.errCode).json(userData);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred during login",
      details: error.message
    });
  }
};

export async function  forgot (req, res)  {
  const user = req.user;
  try {
    let data = await userService.reset(user);
    if (data) {
      return res.status(200).json({
        msg: "Send verification email sucessfully ",
      });
    } else {
      res.status(500).json("Error");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


export async function  changepass (req, res)  {
  // try {
    
  //   let data = await userService.changepass(req.body);

  //   if (data.errCode==0) {
  //     return res.status(200).json({
  //       msg: "Đổi mật khẩu thành công",
  //     });
  //   } else {
  //     res.status(500).json(data.errMessage);
  //   }
  // } catch (error) {
  //   res.status(500).json(error);
  // }
};

export async function  logout (req, res)  {
  const user = req.user;

  try {
    let data = await authService.logout(user.username);
    if (data) {
      return res.status(200).json({
        msg: "Logout!",
      });
    } else {
      res.status(500).json("Lỗi");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


