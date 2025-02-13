const mongoose = require("mongoose");
const ConnectionString =
  "mongodb+srv://kusum:kusum@cluster0.povyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function connectToDatabase() {
  await mongoose.connect(ConnectionString);
  console.log("connected to db successfully");
}
module.exports = connectToDatabase;
