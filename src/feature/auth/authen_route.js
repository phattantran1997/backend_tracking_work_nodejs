import express from "express";
const router = express.Router();
import * as authController from "./auth_controller";
import { authenticateToken } from "../../middlewares/auth";

/**
 * User Login Model
 * @typedef {object} UserLogin
 * @property {string} username - Username of the user
 * @property {string} password - Password of the user
 */

/**
 * User Model
 * @typedef {object} User
 * @property {string} username - Username of the user
 * @property {string} password - Password of the user
 * @property {string} name - Full name of the user
 * @property {string} role - Role of user
 */

/**
 * POST /auth/login
 * @summary login
 * @security JWT
 * @tags Authorization
 * @param {UserLogin} request.body.required - UserLogin info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 */
router.post("/login", authController.login);

/**
 * POST /auth/register
 * @summary register new account
 * @security JWT
 * @tags Authorization
 * @param {User} request.body.required - UserLogin info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 */
router.post("/register", authController.register);

/**
 * POST /auth/forgot
 * @summary forgot account
 * @security JWT
 * @tags Authorization
 * @param {User} request.body.required - UserLogin info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 */
router.post("/forgot", authController.forgot);
router.post("/changepass", authController.changepass);

router.post("/logout", authenticateToken, authController.logout);

module.exports = router;
