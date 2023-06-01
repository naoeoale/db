import { Sequelize } from "sequelize";
import connection from '../config/db.js';
import User from "./User.js";
import bcrypt from 'bcrypt';

const Livro = connection.define(
    'livro',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false,

        },
        categoria:{
            type: Sequelize.STRING,
            allowNull: false,

        },
        subcategoria:{
            type: Sequelize.STRING,
            allowNull: false,

        },
        autor:{
            type: Sequelize.STRING,
            allowNull: false,

        },
        preco:{
            type: Sequelize.INTEGER,
            allowNull: false,

        },


    }
   
)
Livro.belongsTo(User, {
    foreignKey: 'idUser'
});

export default Livro;