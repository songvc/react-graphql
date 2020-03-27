module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable('userSessions', {
        id : {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        userId: {
            allowNull: false,
            type: DataTypes.CHAR(64)
        },
        expiresAt: {
            allowNull: false,
            type: DataTypes.DATE
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