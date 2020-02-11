import express from "express";
import { authRoutes } from "./modules/auth/AuthRoute";
import { kidRouters } from "./modules/kids/KidRoute";

export const routes = express.Router();

routes.use("/register", authRoutes);
routes.use("/kid", kidRouters);
