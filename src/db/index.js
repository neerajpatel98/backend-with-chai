import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  // mongoose actually ek return object deta hai
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);  // connectionInstance ko print kara ke dekho
        
    } catch (error) {
        console.log("MongoDb connection Failed: ", error);
        process.exit(1)// fatal errror
        
    }
}

export default connectDB;