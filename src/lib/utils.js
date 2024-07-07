const { default: mongoose } = require("mongoose");

const connection = {};

const connectTodb = async () => {
  // Or:
  try {
    if (connection.isConnected) {
      console.log("using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
