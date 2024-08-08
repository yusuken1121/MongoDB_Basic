import { app } from "./app";
import { HOST, PORT } from "./env";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUrl = process.env.DB_URL;
if (!dbUrl) {
  console.error("DB_URL is not defined");
} else {
  mongoose
    .connect(dbUrl)
    .then(() =>
      app.listen(PORT, HOST, () => {
        console.log(`[server]: listening at http://${HOST}:${PORT}`);
      })
    )
    .catch((error) => console.log(error));
}
