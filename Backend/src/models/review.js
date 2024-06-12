const DataTypes = require("sequelize");

const review = (sequelize) => {
    return sequelize.define("Review", {
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
        comments: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE
        },
        qualification: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        }
    })
}