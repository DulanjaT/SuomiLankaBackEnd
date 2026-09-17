const express = require("express");
const cors = require("cors");

const prisma = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.get("/health/db", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT NOW()`;

    res.json({
      status: "ok",
      database: "connected",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Database connection failed",
    });
  }
});

module.exports = app;