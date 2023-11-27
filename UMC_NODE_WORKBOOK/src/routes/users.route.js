import express from "express";
import { user_mission } from "../controllers/users.controller.js";

export const userRouter = express.Router();

userRouter.get("/:userid/missions", user_mission);
