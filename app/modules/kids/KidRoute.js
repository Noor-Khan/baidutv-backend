import express from "express";
import { KidController } from "./KidController";

export const kidRouters = express.Router();

const { createKid } = new KidController();

kidRouters.post("/", createKid);
