import express, { Request, Response } from "express";
export const app = express();

// middleware
app.use(express.json());

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ error: "Invalid endpoint" });
});
