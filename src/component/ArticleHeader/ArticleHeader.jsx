import React from "react";
import "./ArticleHeader.css";

const ArticleHeader = ({
  category = "CHECKLISTS",
  title = "Ladder Inspections and Checklists for Ladder Safety",
  author = "TEAM SAFESITE",
  date = "JUNE 17, 2022",
  image,
  bottomCardText = "This article covers:",
}) => {
  return (
    <div className="newsArticle-wrapper">
      <div className="newsArticle-header">
        <p className="newsArticle-category">{category}</p>
        <h1 className="newsArticle-title">{title}</h1>
        <div className="newsArticle-meta">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="author"
          />
          <div>
            <p className="newsArticle-author">BY {author}</p>
            <span className="newsArticle-date">{date}</span>
          </div>
        </div>
      </div>

      {/* Image + Tag */}
      <div className="newsImage-block">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt={title}
          className="newsImage"
        />

        <div className="newsTag-box">
          <p>{bottomCardText}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
