import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27019/gatos", {
        });
        console.log("Database is connected");
    } catch (error) {
        console.log("Database connection error:", error);
    }
};
