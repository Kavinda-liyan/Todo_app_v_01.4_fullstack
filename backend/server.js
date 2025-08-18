import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/todos", todoRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listning on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
