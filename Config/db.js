const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connection Succeeded.");
  } catch (error) {
    console.error("Error in DB connection:", error.message);
  }
};

module.exports = connectDb;
