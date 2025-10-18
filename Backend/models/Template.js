import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model("Template", templateSchema);
