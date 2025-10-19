const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas URI
const uri = "mongodb+srv://gitaufaith70:<db_96104922g>@cluster0.nhvzy6d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true }
};

// Connect to MongoDB (Persistent)
async function connectDB() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
}

connectDB();

// Routes (Users API Example)
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
