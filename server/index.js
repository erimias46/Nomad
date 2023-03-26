import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRoute } from "./Routes/UserRoute.js";
const app = express();


app.use(express.json());
app.use(cors());

app.use("/auth", userRoute);
app.get('/home', (req, res) => {
  res.send("Hello")
})

mongoose
  .connect("mongodb://127.0.0.1:27017/Nomad")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3001, () => {
  console.log("connected on port 3001");
});
