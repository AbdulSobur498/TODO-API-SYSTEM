import {DataTypes, Model} from 'sequelize'
import { sequelize } from '../config/sequelize'

class User extends Model {
    id?:number;
    firstName?:string
    lastName?:string
    email?:string
    password?:string
}

User.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
    updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          }

},{
    sequelize,
    modelName:'User',
    timestamps: true,
    tableName: 'users'
})


export default User