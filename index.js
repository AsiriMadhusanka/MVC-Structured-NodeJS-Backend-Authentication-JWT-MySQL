require("dotenv").config();
const express = require('express');
const app = express();

// Add this line
app.use(express.json());

// Import routes
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');

// Use routes
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);

const port = process.env.APP_PORT || 4000;
app.listen(port, () => {
 console.log("server up and running on PORT :", port);
});





// require("dotenv").config();
// const express = require("express");
// const app = express();
// const userRouter = require("./api/users/user.router");

// app.use(express.json());


// app.use("/api/users", userRouter);

// const port = process.env.APP_PORT || 4000;
// app.listen(port, () => {
//   console.log("server up and running on PORT :", port);
// });
