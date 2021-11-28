const express = require("express");
const cors = require("cors");
const mongoConnection = require("./connection/mongoDB");
const app = express();
app.use(cors());

// Required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets/uploads", express.static("uploads"))


// Routes
const USERS_ROUTE = require("./routes/users");
app.use("/users", USERS_ROUTE);

// Establishing connection
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Connected at port ${PORT}`));