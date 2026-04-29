"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class Task extends sequelize_1.Model {
}
Task.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        },
    },
    isCompleted: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'Task',
    timestamps: true,
    tableName: 'tasks'
});
exports.default = Task;
