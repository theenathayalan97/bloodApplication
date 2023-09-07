const Sequelize = require("sequelize"); 

const database = new Sequelize("new", "root", "1234", { 
 		host: "localhost", 
  		dialect: "mysql", 
}); 
 
const db = {}; 

db.Sequelize = Sequelize; 
db.database = database; 

db.user = require ("../schema/user") (database, Sequelize); 
db.role = require ("../schema/role") (database,Sequelize);

module.exports = db; 