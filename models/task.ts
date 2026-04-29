import {DataTypes, Model} from 'sequelize'
import { sequelize } from '../config/sequelize'


class Task extends Model {
    title?: string;
    description?: string;
    isCompleted?: boolean;
    userId?: number;
  }


  Task.init({
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        },
    },
    isCompleted: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Task',
    timestamps: true,
    tableName: 'tasks'
  });


export default Task;