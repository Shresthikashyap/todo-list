import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/todoapp";
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
    }
};