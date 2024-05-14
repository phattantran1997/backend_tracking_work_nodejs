npx sequelize-cli db:migrate


npx sequelize-cli model:generate --name Products --attributes name:string,status:string


app.use("/api/Products", require('../feature/products/products_route'));