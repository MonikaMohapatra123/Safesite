import mongoose from "mongoose";

const industrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  checkpoints: [
    {
      title: { type: String },
      photo: { type: String },
      details: [
        {
          title: { type: String },
          description: { type: String }
        }
      ]
    }
  ]
}, { timestamps: true });

export default mongoose.model("Industry", industrySchema);
