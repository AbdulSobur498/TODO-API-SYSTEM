import {Request, Response} from 'express';
import {matchedData, validationResult} from 'express-validator';
import { Task } from '../models/index';
import { Op } from 'sequelize';

export const createTodo =  async ( req:Request, res:Response) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) return res.status(401).send({ error: result.array()});
        const data = matchedData(req);
        const newTodo = await Task.create(data);
        return res.status(201).send({msg: 'Todo successfully added', newTodo});
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
    
};


export const getAllTodo = async (req:Request, res:Response) => {
    const { filter, value } = req.query;

    const whereClause: any = {};

    if (filter && value) {
        whereClause[filter as string] = {
            [Op.like]: `%${value}%`
        };
    }

    try {
        const todos = await Task.findAll({ where: whereClause });
        return res.status(200).json(todos);
    } catch (error:any) {
        return res.status(500).json({ error: "Filtering failed. Check your column names." });
    }
};

export const getTodo = async (req:Request, res:Response) => {
    try {
        const { findTodoIndex } = req;
        const findTodo = await Task.findOne({where: { id : findTodoIndex }});
        if (!findTodoIndex) return res.status(404).send({msg:'Bad Request Invalid ID'})
        return res.status(200).send(findTodo);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
    
};

export const updateTodoCom = async (req:Request, res:Response) => {
    try {
        const { body, findTodoIndex } = req;
        const updateTodo = await Task.update({ ...body }, { where: { id : findTodoIndex } });
        return res.send('updateTodo');
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
    
};


export const updateTodo = async (req:Request, res:Response) => {
    try {
        const { body, findTodoIndex } = req;
        const findTodo = await Task.findOne({where: { id : findTodoIndex }});
        if (!findTodo) {
            res.status(400).send('Todo not find');
        }
        const updateTodo = await Task.update(  {...findTodo, ...body}, {where: { id: findTodoIndex}});
        return res.send(updateTodo)
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTodo = async (req:Request, res:Response) => {
    try {
        const { findTodoIndex } = req;
        const deleteTodo = await Task.destroy({ where: { id: findTodoIndex }})
        return res.send({ msg: 'Todo successfully deleted'});
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
    
};

