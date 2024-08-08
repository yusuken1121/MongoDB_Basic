import express, { Request, Response } from "express";
import cors from "cors";
import { router as userRouter } from "./routes/users.router";
export const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ error: "Invalid endpoint" });
});
