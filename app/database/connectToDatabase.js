import mongoose from "mongoose";

global.mongoose = {
  connection: null,
  promise: null,
};

export async function connectToDatabase() {
  if (global.mongoose && global.mongoose.connection) {
    console.log("Connected by previous connection");
    return global.mongoose.connection;
  } else {
    const connectionString = process.env.HOMECHEF_CONNECTION_STRING;

    const promise = mongoose.connect(connectionString, {
      autoIndex: true,
    });
    global.mongoose = {
      connection: await promise,
      promise,
    };
    console.log("New connection established with Database");
    return await promise;
  }
}
