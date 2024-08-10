import mongoose from "mongoose";

const connection = {};

const connectToDb = async () => {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export default connectToDb;
