import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const databaseConnection=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected to Database Successfully")
        
    } catch (error) {
        console.log(error)
        
    }
}

export default databaseConnection