import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import "dotenv/config";
// reads .env into process.env

import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import taskRouter from "./routes/taskRout";

const app = express();
// was to start up the server in express

const PORT = process.env.PORT || 6741;

// CORS:Only the Client url address my call this API
app.use(
  cors({ origin: process.env.CLIENT_URL || "http://http://localhost:5173" }),
);

// converts every to json(javascript format)
app.use(express.json());

// /Every endpoint must start with /API/TASKS is handeled by task router
// .use is an inbuilt
app.use("/api/tasks", taskRouter);

const startServer = async () => {
  await mongoose.connect(process.env.MONGO_URL as string);
  console.log("Database connected successfully");

  app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();



// cors: cross origin rescource sharing
