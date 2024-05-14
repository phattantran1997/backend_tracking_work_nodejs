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

  //authen
  app.use("/auth", require('../feature/auth/authen_route'));

  app.use("/api/Users", authenticateToken,require('../feature/users/users_route'));

  return app.use("/", router);
};

module.exports = initWebRoutes;
