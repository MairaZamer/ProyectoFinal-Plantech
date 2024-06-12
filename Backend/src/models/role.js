const DataTypes = require("sequelize");

const role = (sequelize) => {
    return sequelize.define("Role", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        roleName: {
            type: DataTypes.ENUM("Administrator", "Customer"),
            allowNull: false
        }
    })
}
module.exports = {
    role
}