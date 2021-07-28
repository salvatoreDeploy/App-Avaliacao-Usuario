import {Router} from "express";

import {CreateUserService} from '../services/CreateUserService';

const userRoutes = Router();

const createUserService = new CreateUserService();

userRoutes.post("/", createUserService.create);
userRoutes.get("/", createUserService.list);

export {userRoutes}