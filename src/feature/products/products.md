npx sequelize-cli db:migrate


npx sequelize-cli model:generate --name Products --attributes ID:integer,Name:string,JobNo:string,Notes:string,Type:integer,Description:string,Area:float,WidthDim:float,DepthDim:float,LengthDim:float,Weight:float,QRCode:string

app.use("/api/Products", require('../feature/products/products_route'));