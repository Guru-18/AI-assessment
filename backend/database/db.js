const mongoose = require("mongoose");

const connectDB = () => {
        console.log("Connecting to db...")
        mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log("MongoDB Connected");
        }).catch(error => {
            console.log(`MongoDB Connected`);
        });
};

module.exports = connectDB;