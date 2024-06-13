import mongoose from "mongoose";

const Click = new mongoose.Schema({
  insertedAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: {
    type: String,
    required: true
  },
  targetParamValue: {
    type: String,
    default: ""
  }
});
const Link = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  clicks: {
    type: [Click],
    default: []
  },
  targetParamName: {
    type: String,
    default: "t"
  },
  targetValues: [
    {
      name: String,
      value: String
    }
  ]
});
  // name: {
  //   type: String,
  //   required: true,
  //   default: "new task"
  // },
 
  // isComplete: {
  //   type: Boolean,
  //   default: false
  // }
// });

export default mongoose.model("links", Link);
