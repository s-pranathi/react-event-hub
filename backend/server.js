import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import eventRoutes from "./routes/eventRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(5002, console.log("Server is running on port 5002"));
