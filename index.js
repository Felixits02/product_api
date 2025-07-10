import express from "express";
const port = 3000;
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/productroutes.js"

dotenv.config();

const app = express();
app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/api",productRoutes);


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
      console.log("Database connected");
    });
  })
  .catch((err) => console.log(err));
