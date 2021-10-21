import express, { Express } from 'express'
import cors from 'cors'
import drummersRoutes from './routes'

const app: Express = express()

const PORT: string | number = 4000

app.listen(1000, () => {

    return console.log("server is listening on port ${port}")
});

app.use(cors());
app.use(drummersRoutes);


