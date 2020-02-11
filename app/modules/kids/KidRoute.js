import express from "express";
import { KidController } from "./KidController";

export const kidRouters = express.Router();

const { createKid, createKidDetail } = new KidController();

kidRouters.post("/kid", createKid);
kidRouters.post("/kid-detail", createKidDetail);
