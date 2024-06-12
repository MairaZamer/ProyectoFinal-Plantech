const DataTypes = require("sequelize");

const category = (sequelize) => {
    return sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
module.exports = {
    category
}