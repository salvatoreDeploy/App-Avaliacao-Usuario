import express from 'express'
import  "./database";

import {userRoutes} from "./routes/Users.routes";
import { answerRoutes } from './routes/Answer.routes';
import { surveyRoutes } from './routes/Survey.routes';

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/survey/", surveyRoutes);
app.use("/answer/", answerRoutes);

app.listen(3333, () => console.log("Servidor On-line"));