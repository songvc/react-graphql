import { Sequelize } from 'sequelize';

import accessEnv from '../helpers/index';

const DB_URI = accessEnv("DB_URI");

const sequelize = new Sequelize(DB_URI, {
    dialectOptions: {
        charset: 'utf8',
        multipleStatement: true
    },
    logging: false
});

export default sequelize;