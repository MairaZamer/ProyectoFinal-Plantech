const { DataTypes } = require("sequelize");

const products = (sequelize) => {
    return sequelize.define("products", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        },
        technologies: {
            type: DataTypes.ENUM("React", "Angular", "Vue.js", "Esbelto"),
            allowNull: false
        },
        categories: {
            type: DataTypes.ENUM("salud", "tecnologia", "educacion", "moda"),
            allowNull: false
        },
        file: {
            type: DataTypes.BLOB,
            allowNull: false
        }
    },
        { timestamps: true }
    );
};

module.exports = products;