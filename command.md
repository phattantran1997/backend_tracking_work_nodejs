<!-- MASON -->
mason init

<!-- Create table and model sequelize -->
# npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

<!-- Running Migrate -->
# npx sequelize-cli db:migrate

<!-- Notify -->
# npx sequelize-cli model:generate --name Notify --attributes ma:string,nguoitao:string,nguoinhan:string,isread:boolean,ispush:boolean,tieude:string,noidung:string,buid:string,status:string,type:string,thoigianPush:date

