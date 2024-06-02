import express from "express";
import * as controller from "./job_timings_controller"
let router = express.Router();
/**
 * A JobTimings
 * @typedef {object} JobTimings
 * @property {integer} id.required - id of the JobTimings
 * @property {integer} ProductID.required - ProductID of the JobTimings
 * @property {string} JobNo.required - JobNo of the JobTimings
 * @property {string} OperatorID.required - OperatorID of the JobTimings
 * @property {string} JobTime.required - JobTime of the JobTimings
 * @property {string} JobDay.required - JobDay of the JobTimings
 * @property {string} Duration.required - Duration of the JobTimings
 * @property {string} Status.required - Status of the JobTimings
 */

/**
 * GET /api/JobTimings/getAll
 * @summary get all data JobTimings
 * @security JWT
 * @tags JobTimings
 * @return {array<object>} 200 - success response - application/json
 * @return  400 - Bad request response
 */
router.get("/getAll", controller.getAll);

/**
 * GET /api/JobTimings/getById
 * @summary get data JobTimings by id
 * @security JWT
 * @tags JobTimings
 * @param {number} id.query - id param description
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  404 - Not Found
 * @return  500 - Internal Server error
 */
router.get("/getById", controller.getById);

/**
 * GET /api/JobTimings/getByOperatorID
 * @summary get job timings by operator ID
 * @security JWT
 * @tags JobTimings
 * @param {string} operatorID.query.required - Operator ID
 * @return {array<object>} 200 - success response - application/json
 * @return 400 - Bad request response
 * @return 404 - Not Found
 * @return 500 - Internal Server error
 */
router.get("/getByOperatorID", controller.getByOperatorID);

/**
 * GET /api/JobTimings/getByRangeDate
 * @summary get job timings by range of Date
 * @security JWT
 * @tags JobTimings
 * @param {string} startDate.query.required - start Date
 * @param {string} endDate.query.required - end Date
 * @return {array<object>} 200 - success response - application/json
 * @return 400 - Bad request response
 * @return 404 - Not Found
 * @return 500 - Internal Server error
 */
router.get("/getByRangeDate", controller.getByRangeDate);


/**
 * POST /api/JobTimings/createOne
 * @summary create 1 JobTimings
 * @security JWT
 * @tags JobTimings
 * @consumes application/json
 * @param { JobTimings } request.body.required - JobTimings info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  409 - The record was exists in current database
 * @return  500 - Internal Server error
 */
router.post("/createOne", controller.createOne);

/**
 * PUT /api/JobTimings/editOne
 * @summary update 1 JobTimings
 * @security JWT
 * @tags JobTimings
 * @consumes application/json
 * @param { JobTimings } request.body.required - JobTimings info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  409 - The record was exists in current database
 * @return  500 - Internal Server error
 */
router.put("/editOne", controller.editOne);



/**
 * Delete /api/JobTimings/deleteOne
 * @summary delete 1 JobTimings
 * @security JWT
 * @tags JobTimings
 * @consumes application/json
 * @param { JobTimings } request.body.required - JobTimings info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  404 - Not Found
 * @return  500 - Internal Server error
 */
router.delete("/deleteOne", controller.deleteOne);

module.exports = router;