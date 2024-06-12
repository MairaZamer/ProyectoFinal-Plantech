const DataTypes = require("sequelize");

const orderDetail = (sequelize) => {
    return sequelize.define("OrderDetail", {
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
            }
        },
        bookId: {
            type: DataTypes.INTEGER,
            references: {
                model: book,
                key: "id",
            }
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
module.exports = {
    orderDetail
}