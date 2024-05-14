npx sequelize-cli db:migrate


npx sequelize-cli model:generate --name {{name.pascalCase()}} --attributes name:string,status:string


app.use("/api/{{name.pascalCase()}}", require('../feature/{{name.snakeCase()}}/{{name.snakeCase()}}_route'));