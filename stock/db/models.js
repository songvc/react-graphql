import { DataTypes, Model } from 'sequelize';
import sequelize from './connection';

export class Stocks extends Model {}
Stocks.init({
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT
    }
},
{
    modelName: "stocks",
    sequelize
})