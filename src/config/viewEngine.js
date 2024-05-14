import express  from "express";
let configViewEngine = (app) =>{
    
    app.use(express.static("./src/public"));
    app.set('view cache', false);
    app.set("view engine", "ejs");
    app.set("views", "./src/views") 
    
}

module.exports = configViewEngine;

