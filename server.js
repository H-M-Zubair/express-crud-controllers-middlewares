

import path from "path";
import posts from "./routes/posts.js";
import express from "express";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";

import { fileURLToPath } from "url";


//To Fetch the FIle path 
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);


const port = process.env.PORT || 8000;
var app = express();

//Body parser middleware for post api request json body and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware logger
app.use(logger);

//api routes
app.use("/api/posts", posts);

//Error Handler
app.use(errorHandler);

app.listen(port, function () {
  return console.log(`server is running on port ${port}`);
});
 