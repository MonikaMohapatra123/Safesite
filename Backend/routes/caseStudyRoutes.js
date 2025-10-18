import express from "express";
import CaseStudy from "../models/CaseStudy.js";

const router = express.Router();

// GET all case studies
router.get("/", async (req, res) => {
  try {
    const data = await CaseStudy.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single case study by ID
router.get("/:id", async (req, res) => {
  try {
    const data = await CaseStudy.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Case study not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new case study
router.post("/", async (req, res) => {
  const caseStudy = new CaseStudy(req.body);
  try {
    const saved = await caseStudy.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a case study by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Case study not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a case study by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await CaseStudy.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Case study not found" });
    res.json({ message: "Case study deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
