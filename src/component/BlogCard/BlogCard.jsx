import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blogPosts }) => {
  if (!blogPosts || blogPosts.length === 0) return null;

  return (
    <section className="blogcard-section">
      <div className="blogcard-container">
        {blogPosts.map((post, index) => (
          <div className="blogcard" key={index}>
            <img src={post.image} alt={post.title} className="blogcard-image" />
            <div className="blogcard-content">
              <p className="blogcard-meta">
                {post.category || post.tag} <span>• {post.readTime}</span>
              </p>
              <h3 className="blogcard-title">{post.title}</h3>
              <p className="blogcard-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
