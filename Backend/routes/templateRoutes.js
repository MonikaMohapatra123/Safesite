import express from "express";
import Template from "../models/Template.js";

const router = express.Router();

// ✅ GET all templates
router.get("/", async (req, res) => {
  try {
    const data = await Template.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ POST full JSON object with keys like "12", "13", etc.
router.post("/", async (req, res) => {
  try {
    const templatesData = req.body;

    if (!templatesData || typeof templatesData !== "object") {
      return res.status(400).json({ message: "Invalid data format" });
    }

    // ✅ save the entire object as one document
    const savedTemplate = await Template.create(templatesData);

    res.status(201).json(savedTemplate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
