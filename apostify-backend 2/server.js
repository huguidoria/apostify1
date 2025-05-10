const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/lp/balance/:wallet", (req, res) => {
  const wallet = req.params.wallet;
  res.json({ wallet, balance: "1000.00" });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(process.env.PORT || 3000, () => {
      console.log("Servidor en puerto", process.env.PORT || 3000);
    });
  })
  .catch((err) => console.error("Error MongoDB:", err));