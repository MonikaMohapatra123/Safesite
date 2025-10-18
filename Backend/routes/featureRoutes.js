import express from "express";
import Feature from "../models/Feature.js";

const featureRoutes = express.Router();

// GET all features
featureRoutes.get("/", async (req, res) => {
  try {
    const features = await Feature.find();
    res.json(features);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single feature by ID
featureRoutes.get("/:id", async (req, res) => {
  try {
    const feature = await Feature.findById(req.params.id);
    if (!feature) return res.status(404).json({ message: "Feature not found" });
    res.json(feature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new feature
featureRoutes.post("/", async (req, res) => {
  try {
    const newFeature = new Feature(req.body);
    const savedFeature = await newFeature.save();
    res.status(201).json(savedFeature);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update feature by ID
featureRoutes.put("/:id", async (req, res) => {
  try {
    const updatedFeature = await Feature.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFeature) return res.status(404).json({ message: "Feature not found" });
    res.json(updatedFeature);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE feature by ID
featureRoutes.delete("/:id", async (req, res) => {
  try {
    const deletedFeature = await Feature.findByIdAndDelete(req.params.id);
    if (!deletedFeature) return res.status(404).json({ message: "Feature not found" });
    res.json({ message: "Feature deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default featureRoutes;
