"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.todoList = void 0;
const node_console_1 = require("node:console");
exports.todoList = [
    { id: 1, title: 'Mobile Development', description: 'build a mobile app', completed: true, createdAt: node_console_1.timeStamp },
    { id: 2, title: 'Physics', description: 'study quantum physics', completed: true, createdAt: node_console_1.timeStamp },
    { id: 3, title: 'madrsah', description: 'go to madrasah', completed: true, createdAt: node_console_1.timeStamp },
    { id: 4, title: 'Backend Development', description: 'build a banking system', completed: true, createdAt: node_console_1.timeStamp },
    { id: 5, title: 'Durus', description: 'listen to Tawheed lectures', completed: true, createdAt: node_console_1.timeStamp }
];
exports.users = [
    { id: 1, firstName: 'abdusobur', lastName: 'Abdusobur', email: 'belloabdu123@gmail.com', password: 'belloabdu' },
    { id: 2, firstName: 'abdullah', lastName: 'Abdullah', email: 'belloabdu123@gmail.com', password: 'abdullah.com' },
    { id: 3, firstName: 'fawzan', lastName: 'Fawzan', email: 'belloabdu123@gmail.com', password: 'fawzan.net' },
    { id: 4, firstName: 'rabee', lastName: 'Rabee', email: 'belloabdu123@gmail.com', password: 'rabee.net' }
];
