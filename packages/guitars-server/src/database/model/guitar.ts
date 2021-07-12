import { DataTypes, literal, UUIDV4 } from "sequelize";
import { sequelize } from "../configure-database";

export const Guitar = sequelize.define('Guitar', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    modelName: {
        type: DataTypes.STRING,
    },
    manufacturer: {
        type: DataTypes.STRING,
    },
    originCountry: {
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.INTEGER
    }
})