import express from "express";
import * as controller from "./{{name.snakeCase()}}_controller"
let router = express.Router();
/**
 * A {{name.snakeCase()}}
 * @typedef {object} {{name.snakeCase()}}
 * @property {integer} id.required - id of the {{name.snakeCase()}}
 */

/**
 * GET /api/{{name.snakeCase()}}/getAll
 * @summary get all data {{name.snakeCase()}}
 * @security JWT
 * @tags {{name.snakeCase()}}
 * @return {array<object>} 200 - success response - application/json
 * @return  400 - Bad request response
 */
router.get("/getAll", controller.getAll);

/**
 * GET /api/{{name.snakeCase()}}/getById
 * @summary get data {{name.snakeCase()}} by id
 * @security JWT
 * @tags {{name.snakeCase()}}
 * @param {number} id.query - id param description
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  404 - Not Found
 * @return  500 - Internal Server error
 */
router.get("/getById", controller.getById);

/**
 * POST /api/{{name.snakeCase()}}/createOne
 * @summary create 1 {{name.snakeCase()}}
 * @security JWT
 * @tags {{name.snakeCase()}}
 * @consumes application/json
 * @param { {{name.snakeCase()}} } request.body.required - {{name.snakeCase()}} info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  409 - The record was exists in current database
 * @return  500 - Internal Server error
 */
router.post("/createOne", controller.createOne);

/**
 * PUT /api/{{name.snakeCase()}}/editOne
 * @summary update 1 {{name.snakeCase()}}
 * @security JWT
 * @tags {{name.snakeCase()}}
 * @consumes application/json
 * @param { {{name.snakeCase()}} } request.body.required - {{name.snakeCase()}} info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  409 - The record was exists in current database
 * @return  500 - Internal Server error
 */
router.put("/editOne", controller.editOne);



/**
 * Delete /api/{{name.snakeCase()}}/deleteOne
 * @summary delete 1 {{name.snakeCase()}}
 * @security JWT
 * @tags {{name.snakeCase()}}
 * @consumes application/json
 * @param { {{name.snakeCase()}} } request.body.required - {{name.snakeCase()}} info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  404 - Not Found
 * @return  500 - Internal Server error
 */
router.delete("/deleteOne", controller.deleteOne);

module.exports = router;