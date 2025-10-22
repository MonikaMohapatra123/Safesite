
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

// mongoose.connect("mongodb+srv://monalishajspur_db_user:gudi123@cluster0.pr7cy1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

// // ✅ Routes
// app.use("/api/features", featureRoutes);
// app.use("/api/industries", industryRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/casestudies", caseStudyRoutes);

// // ✅ Test route
// app.get("/test", (req, res) => {
//   res.send("Server is working!");
// });

// // ✅ Start server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import featureRoutes from "./routes/featureRoutes.js";
import industryRoutes from "./routes/industryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import caseStudyRoutes from "./routes/caseStudyRoutes.js";

dotenv.config();  // ✅ Load .env

const app = express();

// ✅ CORS
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

// ✅ Routes
app.use("/api/features", featureRoutes);
app.use("/api/industries", industryRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/casestudies", caseStudyRoutes);

// ✅ Test route
app.get("/test", (req, res) => {
  res.send("Server is working on Vercel ✅");
});

// ✅ Do not use app.listen on Vercel
export default app;
