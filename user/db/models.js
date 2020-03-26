import { DataTypes, Model } from 'sequelize';
import sequelize from './connection';

export class Users extends Model {}
Users.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    passwordHash: {
        allowNull: false,
        type: DataTypes.CHAR(64)
    }
},
{
    defaultScope: {
        rawAttributes: { exclude : [ "passwordHash" ]}
    },
    modelName: "user",
    sequelize
}
)

export class UserSessions extends Model {}
UserSessions.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    userId: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    expiresAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
},
{
    modelName: "userSession",
    paranoid: false,
    sequelize,
    updatedAt: false
});