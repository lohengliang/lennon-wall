import "core-js/stable";
import "regenerator-runtime/runtime";
import postRouter from "./routes/postRouter";
import wallRouter from "./routes/wallRouter";

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("hit my root endpoint!"));

app.use("/posts", postRouter);
app.use("/walls", wallRouter);

module.exports = app;
