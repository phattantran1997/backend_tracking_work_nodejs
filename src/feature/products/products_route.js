import express from "express";
import * as controller from "./products_controller"
let router = express.Router();
/**
 * A Products
 * @typedef {object} products
 * @property {integer} id.required - id of the products
 * @property {string} Name.required - Name of the product
 * @property {string} JobNo.required - JobNo of the product
 * @property {string} Notes.required - Notes of the product
 * @property {integer} Type.required - Type of the product
 * @property {string} Description.required - Description of the product
 * @property {number} Area.required - Area of the product
 * @property {number} WidthDim.required - WidthDim of the product
 * @property {number} DepthDim.required - DepthDim of the product
 * @property {number} LengthDim.required - LengthDim of the product
 * @property {number} Weight.required - Weight of the product
 * @property {string} QRCode.required - QRCode of the product
 */

/**
 * GET /api/products/getAll
 * @summary get all data products
 * @security JWT
 * @tags products
 * @return {array<object>} 200 - success response - application/json
 * @return  400 - Bad request response
 */
router.get("/getAll", controller.getAll);

/**
 * GET /api/products/getById
 * @summary get data products by id
 * @security JWT
 * @tags products
 * @param {number} id.query - id param description
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  404 - Not Found
 * @return  500 - Internal Server error
 */
router.get("/getById", controller.getById);
/**
 * GET /api/products/getByNameAndJobno
 * @summary get data products by name and jobno
 * @security JWT
 * @tags products
 * @param {string} name.query - name 
 * @param {string} jobno.query - jobno

 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  404 - Not Found
 * @return  500 - Internal Server error
 */
router.get("/getByNameAndJobno", controller.getByNameAndJobNo);

/**
 * POST /api/products/createOne
 * @summary create 1 products
 * @security JWT
 * @tags products
 * @consumes application/json
 * @param { products } request.body.required - products info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  409 - The record was exists in current database
 * @return  500 - Internal Server error
 */
router.post("/createOne", controller.createOne);

/**
 * PUT /api/products/editOne
 * @summary update 1 products
 * @security JWT
 * @tags products
 * @consumes application/json
 * @param { products } request.body.required - products info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  409 - The record was exists in current database
 * @return  500 - Internal Server error
 */
router.put("/editOne", controller.editOne);

/**
 * Delete /api/products/deleteOne
 * @summary delete 1 products
 * @security JWT
 * @tags products
 * @consumes application/json
 * @param { products } request.body.required - products info
 * @return {object} 200 - success response - application/json
 * @return  400 - Bad request response
 * @return  404 - Not Found
 * @return  500 - Internal Server error
 */
router.delete("/deleteOne", controller.deleteOne);

module.exports = router;