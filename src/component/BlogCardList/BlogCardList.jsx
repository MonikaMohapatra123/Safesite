// BlogCardList.jsx
import React from "react";
import "./BlogCardList.css";

const BlogCardList = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="safesite-blog-container">
      <div className="safesite-blog-header">
        <h2>Get the latest from Safesite</h2>
        <p>Subscribe to our newsletter for the latest updates.</p>
      </div>

      <div className="safesite-blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="safesite-blog-card">
            <div className="safesite-blog-img">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="safesite-blog-content">
              <div className="safesite-blog-meta">
                <span>{blog.category}</span> • <span>{blog.readTime}</span>
              </div>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCardList; // ✅ make sure this is present
