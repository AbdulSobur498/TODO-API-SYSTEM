import { Request, Response, NextFunction } from 'express';
import { User } from '../models/index';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
require('dotenv').config();



export const registerUser = async (req:Request, res:Response) => {

    const { firstName, lastName, email, password } = req.body;
    
    const user = await User.findOne({ where: { email } })

    if (user) {
        res.status(400).send('User already exist')
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });

     res.status(201).json('User already created');
};

export const loginUser = async (req:Request, res:Response) => {
    const { email, password } = req.body

    const user = await User.findOne({where: { email }});

    if (!user) {
        res.status(404).send('Bad request');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.send('Invalid password');
    }

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET as string , 
        {expiresIn: '1d'})

        res.send(200).json({user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email, 
        }, token})
}