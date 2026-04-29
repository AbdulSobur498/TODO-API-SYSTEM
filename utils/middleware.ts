import { Request, Response, NextFunction } from 'express';
import { todoList } from '../utils/constants';

declare global {
  namespace Express {
    interface Request {
      findTodoIndex?: number; // The '?' means it's optional
    }
  }
}


export const resolveTodoIndexById = (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params;
    const parsedId = Number(id);
    if (isNaN(parsedId)) return res.status(400)
    const  findTodoIndex = todoList.findIndex((todo) => todo.id === parsedId);

    if (findTodoIndex === -1) return res.status(400);

     req.findTodoIndex = findTodoIndex;
    next();
}