import mongoose from "mongoose";

const User = new mongoose.Schema({
  _id: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    required: true,
    default: ""
  },
  email: {
    type: String,
    required: true,
    default: ""
  },
  password: {
    type: String,
    required: true,
    default: ""
  },
  links: {
    type: [String], // Assuming links is an array of strings
    default: []
  },

});

export default mongoose.model("users", User);
