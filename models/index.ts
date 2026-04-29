import User from "./user";
import Task from "./task";


User.hasMany(Task, { foreignKey: 'userId', as: 'tasks' });
Task.belongsTo(User, { foreignKey: 'userId', as: 'users' });

const models = {
  User,
  Task
};

export { User, Task };
export default models;