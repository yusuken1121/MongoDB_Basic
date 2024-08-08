import express, { Request, Response, Router } from "express";
import { createUser } from "../controllers/users.controller";

export const router = Router();

router.post("/", createUser);
