import express, { Request, Response, Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/users.controller";

export const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);
