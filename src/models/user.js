
const sequelize = require('../db/dbConfig')
const { DataTypes } = require('sequelize');



const user = sequelize.define( 'User' ,{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize});

sequelize.sync({}).then(() => console.log('tabela users criada')).catch(
    (err) => { console.log(`erro na criacao da tabela: ${err}`)}
)



module.exports = user