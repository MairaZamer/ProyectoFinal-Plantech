const DataTypes = require("sequelize");

const order = (sequelize) => {
    return sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: user,
                key: "id",
            },
        },
        orderDate: {
            type: DataTypes.DATE
        }
    })
}
module.exports = {
    order
}