import { Request, Response } from "express";
import { User } from "../models/users.model";

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = new User({
    email,
    password,
  });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("Internal Server Error", error);
    res.status(501).json("Cannot create a new user");
  }
};
