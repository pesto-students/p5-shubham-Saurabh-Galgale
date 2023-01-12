const mongoose = require("mongoose");


const connectDB = async () => {
    console.log(process.env.GETMONGO);
    try {
        const conn = await mongoose.connect(process.env.GETMONGO);
        // console.log(`MongoDB connected: ${conn.connection.host}`);
        console.log("db connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = { connectDB };


