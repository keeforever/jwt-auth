require("dotenv").config();
require("express-async-errors");

// express setup
const express = require("express");
const app = express();

// db setup
// middleware setup
app.use(express.static('./public'))
app.use(express.json());

// routes setup
const mainRouter = require("./routes/main");
app.use("/api/v1", mainRouter);

// error handler setup
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleWare = require('./middleware/error-handler')
app.use(errorMiddleWare)
app.use(notFoundMiddleware)

// port setup
const PORT = process.env.PORT | 5000;

const start = () => {
  app.listen(PORT, () => console.log(`Port ${PORT} successfully connected.`));
};

start();
