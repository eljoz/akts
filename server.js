import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";

import agentRouter from "./routes/agentRoutes.js";


dotenv.config({path: "./config.env"});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected tho db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/agents", agentRouter);


const __dirname = path.resolve();
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "Client/build")));
  app.get("*", (req, res) =>{
  res.sendFile(path.join(__dirname + '/Client/build/index.html'))
  });
}else{
  app.get("/", (req, res) => {
    res.send("Api running")
  })
}


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
