import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoute from "./src/Routes/authRoute.js";
import symptomsRoute from "./src/Routes/symptonRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/symptoms", symptomsRoute);

app.get("/live", (req, res) => {
  res.json("Hi, I am live now");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
