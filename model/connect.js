const dbConfig = require("../Db/db.config");

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,
dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operationsAliases: false,
	// pool: {
	// max: dbConfig.pool.max,
	// min: dbConfig.pool.min,
	// acquire: dbConfig.pool.acquire,
	// idle: dbConfig.pool.idle
	// }
})
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../schema/user") ;

module.exports = db;
// The user should not forget to summon the sync() method in the server.js.
// const app = express();
// app.use(....);

// const db = require(“./app/models”);
// db.sequelize.sync();