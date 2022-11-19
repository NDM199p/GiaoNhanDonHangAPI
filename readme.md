table order sequilize-cli
`npx sequelize-cli model:generate --name Order --attributes receiverPhone:STRING,receiverFullName:STRING,receiverAddress:STRING,receiverArea:INTEGER,packageMass:INTEGER,packageUnitMass:STRING,packageLong:INTEGER,packageWidth:INTEGER,packageHeight:INTEGER,packageCod:INTEGER,packageUnitCod:STRING,packagePrice:INTEGER,freight:INTEGER,noteTransport:INTEGER,noteCode:STRING,noteMsg:STRING --force`

table user
`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,username:string,password:string`

### Module Area

table area
`npx sequelize-cli model:generate --name Area --attributes name:string,address:string,level:integer,areaParent:integer,descri:string`

table levelArea
`npx sequelize-cli model:generate --name LevelArea --attributes name:string,descri:string`

### Module Tránsit Ageint

table tránsit agent
`npx sequelize-cli model:generate --name TransitAgent --attributes name:string,descri:string,area:integer,address:string`

### Module Warehose

table warehose
`npx sequelize-cli model:generate --name Warehose --attributes transitAgent:integer,orderId:string,status:string`
