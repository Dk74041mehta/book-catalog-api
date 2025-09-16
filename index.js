const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Book Catalog API Running...");
});

//User Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Book Routes
const bookRoutes = require("./routes/bookRoutes");
app.use("/api/books", bookRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
