const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://vamsivattigunta96:1234567890@cluster1.1krmu39.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
