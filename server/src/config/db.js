import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI;
    if (!connStr) {
      throw new Error("MONGODB_URI was not found in the .env file.!");
    }
    const conn = await mongoose.connect(connStr);
    console.log(
      ` MongoDB Atlas Connection Successful: ${conn.connection.host}`,
    );
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};
