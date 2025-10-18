import express from "express";
import mongoose from "mongoose";
import featureRoutes from "./routes/featureRoutes.js"; 
import industryRoutes from "./routes/industryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js"; // ✅ import blog routes
import caseStudyRoutes from "./routes/caseStudyRoutes.js";

const app = express();
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/safesite", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// ✅ Routes
app.use("/api/features", featureRoutes);
app.use("/api/industries", industryRoutes);
app.use("/api/blogs", blogRoutes); // ✅ blog API
app.use("/api/casestudies", caseStudyRoutes);

// ✅ Test route
app.get("/test", (req, res) => {
  res.send("Server is working!");
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
