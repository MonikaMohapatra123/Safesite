import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  page: { type: String, required: true },
  title: String,
  description: String,
  buttons: [
    { type: { type: String }, text: { type: String } } // ✅ array of objects
  ],
  images: [String],
  links: [String],
  checkpoints: [
    {
      title: String,
      description: String,
      photo: String,
      details: [
        { title: String, description: String }
      ]
    }
  ]
}, { timestamps: true });

export default mongoose.model("Feature", featureSchema);
