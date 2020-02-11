import express from "express";
import { AuthController } from "./AuthController";

export const authRoutes = express.Router();

const { register } = new AuthController();

authRoutes.post("/", register);
