module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable('stocks', {
        id : {
            allowNull: false,
            autoincrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    },
    {
        charset: "utf8"
    })
} 