import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  }, 

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  // leader: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },

  status: {
    type: String,
    enum: ["Active", "Completed", "Archived"],
    default: "Active",
  },

  deadline: {
    type: Date,
    required:true
  },
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;
