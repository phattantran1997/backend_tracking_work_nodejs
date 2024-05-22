import express from "express";
import { authenticateToken } from "../middlewares/auth";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    let data = Date();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  });
  app.use("/auth", require('../feature/auth/authen_route'));
  app.use("/api/Users", authenticateToken, require('../feature/users/users_route'));
  app.use("/api/Products", authenticateToken, require('../feature/products/products_route'));
  app.use("/api/JobTimings",authenticateToken, require('../feature/job_timings/job_timings_route'));
  return app.use("/", router);
};

module.exports = initWebRoutes;
