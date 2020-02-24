import express from "express";
import {
  AuthController
} from "./AuthController";

export const authRoutes = express.Router();

const {
  register,
  googleAuth,
  facebookAuth
} = new AuthController();

authRoutes.post("/register", register);
authRoutes.post("/google-auth", googleAuth)
authRoutes.post("/facebook-auth", facebookAuth)