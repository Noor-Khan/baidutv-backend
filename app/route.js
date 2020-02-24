import express from "express";
import {
  authRoutes
} from "./modules/auth/AuthRoute";
import {
  kidRouters
} from "./modules/kids/KidRoute";

export const routes = express.Router();

routes.use("/auth", authRoutes);
routes.use("/kid", kidRouters);