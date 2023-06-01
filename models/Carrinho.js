import { Sequelize } from "sequelize";
import connection from '../config/db.js';
import User from "./User.js";
import Livro from "./Livro.js";
import bcrypt from 'bcrypt';

const Carrinho = connection.define(
    'carrinho',
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
        idLivro:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'livros',
                key: 'id'
            }
        }
        


    }
)

Carrinho.belongsTo(Livro, {
    foreignKey: 'idLivro'
});

Carrinho.belongsTo(User, {
    foreignKey: 'idUser'
});

export default Carrinho;