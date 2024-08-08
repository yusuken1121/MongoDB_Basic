import express, { Request, Response, Router } from "express";
import { createUser, getUsers } from "../controllers/users.controller";

export const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
