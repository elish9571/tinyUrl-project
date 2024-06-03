import mongoose from "mongoose";

const uri =
"mongodb+srv://elish9571:<password>@<host>/<dbname>?retryWrites=true&w=majority";
const uriLocal = "mongodb://localhost:27017/tinyUrl";

const connectDB = async () => {
  await mongoose.connect(uri);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

export default connectDB;
