const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'mysql://eagqkcfhpdjrhrm4:we852vybghqmiaup@en1ehf30yom7txe7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/s679bpna954lbdbo',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;