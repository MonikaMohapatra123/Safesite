import mongoose from "mongoose";

// Schema for individual posts inside blog
const postSchema = new mongoose.Schema({
  image: String,
  category: String,
  readTime: String,
  title: String,
  description: String
});

// Schema for blogList items
const blogListSchema = new mongoose.Schema({
  id: Number,
  category: String,
  readTime: String,
  title: String,
  description: String,
  image: String
});

// Main Blog schema
const blogSchema = new mongoose.Schema({
  page: { type: String, default: "ResourceBlog" },
  featured: {
    image: String,
    tag: String,
    readTime: String,
    title: String,
    description: String,
    author: String,
    date: String
  },
  posts: [postSchema],
  blogList: [blogListSchema]
});

export default mongoose.model("Blog", blogSchema);
