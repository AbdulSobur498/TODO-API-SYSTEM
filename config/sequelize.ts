import { Sequelize } from "sequelize";
import path from 'path';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DATABASE_STORAGE || path.join(__dirname, '../database.sqlite'),
  logging: true 
});
