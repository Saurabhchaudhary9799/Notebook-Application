const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const AppError = require("./Utils/appError");
const globalErrorHandler = require("./Controllers/errorController");
const userRoute = require("./Routes/userRoutes");

dotenv.config();
const app = express();

// DataBase Connection
mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then((con) => console.log(`Database is successfully connected`))
  .catch((err) => console.log(err));

// MiddleWare
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/users", userRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this  server`), 404);
});

app.use(globalErrorHandler);

// Server Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is connected at ${PORT}`);
});
