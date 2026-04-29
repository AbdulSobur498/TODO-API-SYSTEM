import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { sequelize } from '../config/sequelize'

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
        declare id: CreationOptional<number>;
        declare firstName: string;
        declare lastName: string;
        declare email: string;
        declare password: string;
        declare createdAt: CreationOptional<Date>;
        declare updatedAt: CreationOptional<Date>;
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


export default User;