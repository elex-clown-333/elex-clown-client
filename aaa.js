const {Sequelize, DataTypes, Model} = require("sequelize");
const express = require('express');
const {initAll} = require("./entities");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'gimno.db'
});

const eApp = express();

eApp.use(express.json());

eApp.use('/patients', require('./routes').patients);
eApp.use('/conclusions', require('./routes').conclusions);

async function start() {
    await sequelize.sync();

}

eApp.listen(6969,() => {
    console.log(`Example app listening on port 6969`)
    initAll(sequelize)
})

module.exports = start