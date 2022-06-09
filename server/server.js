const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require(`${__dirname}/config/db`);
const errorMiddleware = require("./middleware/errors");

dotenv.config();
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/posts", require("./routes/posts"));

// Middleware to handle errors
app.use(errorMiddleware);

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
