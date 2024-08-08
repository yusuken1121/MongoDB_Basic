import { Request, Response } from "express";
import { User } from "../models/users.model";

//create
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

//Read
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Internal Server Error", error);
    res.status(501).json("Cannot create a new user");
  }
};

//Update
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Internal Server Error", error);
    res.status(501).json("Cannot create a new user");
  }
};

//Delete
export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(404).json({ message: "success" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error("Internal Server Error", error);
    res.status(501).json("Cannot create a new user");
  }
};
