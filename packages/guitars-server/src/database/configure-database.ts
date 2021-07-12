import { env } from "process";
import { Sequelize } from "sequelize";

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DBNAME } = env;

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DBNAME,
    retry: {
        max: 10
    }
})

export async function configureDatabase() {
    await sequelize.sync({ force: true });
}