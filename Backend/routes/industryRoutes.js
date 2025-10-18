import express from "express";
import Industry from "../models/Industry.js";

const router = express.Router();

// ✅ GET all industries
router.get("/", async (req, res) => {
  try {
    const industries = await Industry.find();
    res.json(industries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET single industry by ID
router.get("/:id", async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);
    if (!industry) return res.status(404).json({ message: "Industry not found" });
    res.json(industry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST new industry
router.post("/", async (req, res) => {
  try {
    const newIndustry = new Industry(req.body);
    const savedIndustry = await newIndustry.save();
    res.status(201).json(savedIndustry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ PUT update industry by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedIndustry = await Industry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedIndustry) return res.status(404).json({ message: "Industry not found" });
    res.json(updatedIndustry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ DELETE industry by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedIndustry = await Industry.findByIdAndDelete(req.params.id);
    if (!deletedIndustry) return res.status(404).json({ message: "Industry not found" });
    res.json({ message: "Industry deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
