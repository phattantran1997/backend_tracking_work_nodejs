npx sequelize-cli db:migrate


npx sequelize-cli model:generate --name Users --attributes name:string,status:string


app.use("/api/Users", require('../feature/users/users_route'));