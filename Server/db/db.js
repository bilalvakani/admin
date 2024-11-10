// import mongoose from "mongoose";

// const connectToDatabase = async()=>{
//     try{
//         await mongoose.connect(process.env.MANGODB_URL)

//     }catch (error){
//        console.log(error)
//     }
// }

// export default connectToDatabase

import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MANGODB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

export default connectToDatabase;
