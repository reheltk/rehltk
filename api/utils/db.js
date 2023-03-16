const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("monogDB connected successfully");
    } catch (error) {
        console.log(error);
    }
};

mongoose.set("strictQuery", false);
module.exports = connectDB;
