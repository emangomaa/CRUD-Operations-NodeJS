import express from "express";
import cors from "cors";
import productsRouter from "./src/modules/products/products.routes.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/products", productsRouter);
app.listen(3000, () => {
  console.log("server up and running on 3000...");
});
