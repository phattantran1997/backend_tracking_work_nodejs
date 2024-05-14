import express from "express";
import * as controller from "./users_controller"
let router = express.Router();
/**
 * A users
 * @typedef {object} users
 * @property {integer} id.required - id of the users
 */

/**
 * GET /api/users/getAll
 * @summary get all data users
 * @security JWT
 * @tags users
 * @return {array<object>} 200 - success response - application/json
 * @return  400 - Bad request response
 */
router.get("/getAll", controller.getAll);

/**
 * GET /api/users/getById
 * @summary get data users by id
 * @security JWT
 * @tags users
 * @param {number} id.query - id param description
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  404 - Not Found
 * @return  500 - Internal Server error
 */
router.get("/getById", controller.getById);

/**
 * POST /api/users/createOne
 * @summary create 1 users
 * @security JWT
 * @tags users
 * @consumes application/json
 * @param { users } request.body.required - users info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  409 - The record was exists in current database
 * @return  500 - Internal Server error
 */
router.post("/createOne", controller.createOne);

/**
 * PUT /api/users/editOne
 * @summary update 1 users
 * @security JWT
 * @tags users
 * @consumes application/json
 * @param { users } request.body.required - users info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  409 - The record was exists in current database
 * @return  500 - Internal Server error
 */
router.put("/editOne", controller.editOne);



/**
 * Delete /api/users/deleteOne
 * @summary delete 1 users
 * @security JWT
 * @tags users
 * @consumes application/json
 * @param { users } request.body.required - users info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  404 - Not Found
 * @return  500 - Internal Server error
 */
router.delete("/deleteOne", controller.deleteOne);

module.exports = router;