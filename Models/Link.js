import mongoose from "mongoose";

const Link = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "new task"
  },
  originalUrl: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("links", Link);