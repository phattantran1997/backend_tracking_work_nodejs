npx sequelize-cli db:migrate


npx sequelize-cli model:generate --name JobTimings --attributes ProductID:integer,JobNo:string,OperatorID:string,JobTime:string,JobDay:string,Duration:string,Status:string

app.use("/api/JobTimings", require('../feature/job_timings/job_timings_route'));