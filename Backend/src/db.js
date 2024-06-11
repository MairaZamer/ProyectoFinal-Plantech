require("dotenv").config();
const { Sequelize } = require("sequelize");
const products = require("./models/products");
const users = require("./models/users");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/plantech`, {
    logging: false,
});

const Products = products(sequelize);
const Users = users(sequelize);

module.exports = {
    conn: sequelize,
    Products,
    Users
};