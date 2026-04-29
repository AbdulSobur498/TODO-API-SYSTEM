import express, {Request, Response} from 'express';
import routes from './routes/index';
import { sequelize } from './config/sequelize';
require('dotenv').config()

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(routes);

app.get('/', (req:Request, res:Response) => {
    console.log('Hello world')
});


const start = async () => {
    try {

    await sequelize.sync({ force: false });
    console.log("Tables recreated with the new userId column!");

    app.listen(port, () => {
    console.log(`Server is running at port ${port}...`);
})
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

start();

