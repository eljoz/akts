import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
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

app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get("/api/keys/google", (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || "" });
});

app.use("/api/upload", uploadRouter);
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/agents", agentRouter);


const __dirname = path.resolve();
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/Client/build")));
  app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/Client/build/index.html"))
);
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
