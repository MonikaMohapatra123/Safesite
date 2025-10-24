// Database Connection: Local MongoDB
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import featureRoutes from "./routes/featureRoutes.js"; 
// import industryRoutes from "./routes/industryRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import caseStudyRoutes from "./routes/caseStudyRoutes.js";

// const app = express();

// // ✅ Enable CORS
// app.use(cors({
//   origin: "http://localhost:3000"
// }));

// app.use(express.json());

// // ✅ Connect to local MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/safesite", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("✅ Local MongoDB connected"))
// .catch(err => console.log("❌ MongoDB connection error:", err));

// // ✅ Routes
// app.use("/api/features", featureRoutes);
// app.use("/api/industries", industryRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/casestudies", caseStudyRoutes);

// // ✅ Test route
// app.get("/test", (req, res) => {
//   res.send("Server is working with local MongoDB!");
// });

// // ✅ Start server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// Database Connection: MongoDB Atlas
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import featureRoutes from "./routes/featureRoutes.js";
import industryRoutes from "./routes/industryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import caseStudyRoutes from "./routes/caseStudyRoutes.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

app.use("/api/features", featureRoutes);
app.use("/api/industries", industryRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/casestudies", caseStudyRoutes);

app.get("/test", (req, res) => {
  res.send("Server is working ✅");
});

// ✅ Local only
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
