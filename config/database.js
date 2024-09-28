import mongoose from "mongoose";

let connected = false;

/**
 * Connect to the MongoDB database. If the database is already connected,
 * do nothing and log a message to the console. If the database is not
 * connected, attempt to connect to the database using the provided
 * MONGODB_URI environment variable. If the connection is successful,
 * set the connected flag to true and log a success message. If the
 * connection fails, log the error to the console.
 */
const connectdb = async () => {
    mongoose.set('strictQuery', true);

    if (connected) {
        console.log("Already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

export default connectdb