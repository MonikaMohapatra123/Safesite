import mongoose from "mongoose";

// Schema for Topics inside section 2
const topicSchema = new mongoose.Schema({
  id: Number,
  image: String,
  category: String,
  readTime: String,
  title: String,
  link: String
});

// Schema for Stats/Testimonials inside section 3
const testimonialSchema = new mongoose.Schema({
  id: Number,
  image: String,
  quote: String,
  name: String,
  title: String,
  stats: String,
  description: String,
  hoverImageDefault: String,
  hoverImageColor: String
});

// Main CaseStudy schema
const caseStudySchema = new mongoose.Schema({
  page: { type: String, default: "ResourceCasestudies" },

  // Section 1: Featured case study
  featured: {
    image: String,
    tag: String,
    readTime: String,
    title: String,
    description: String,
    author: String,
    date: String
  },

  // Section 2: Topics
  topicsSection: {
    id: Number,
    sectionTitle: String,
    viewAllLink: {
      text: String,
      url: String
    },
    topics: [topicSchema]
  },

  // Section 3: Testimonials/Stats
  testimonials: [testimonialSchema]
});

export default mongoose.model("CaseStudy", caseStudySchema);
