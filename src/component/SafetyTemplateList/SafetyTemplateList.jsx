import React, { useState } from "react";
import "./SafetyTemplateList.css";

const SafetyTemplateList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState(
    data?.languages[0] || "English"
  );

  if (!data) return null;

  const categories = data.categories || [];
  const languages = data.languages || [];
  const templates = data.templates || [];

  const filteredTemplates = templates.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="safety-template-container">
      {/* Header */}
      <div className="safety-header">
        <h2 className="safety-title">{data.title}</h2>
        <select
          className="language-select"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </select>
      </div>

      {/* Search + Filter */}
      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search templates..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Template Cards */}
      <div className="template-grid">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template) => (
            <div key={template.id} className="template-card">
              <h3 className="template-title">{template.title}</h3>
              <p className="template-desc">{template.description}</p>
              <button className="view-btn">View Template</button>
            </div>
          ))
        ) : (
          <p className="no-results">No templates found.</p>
        )}
      </div>
    </div>
  );
};

export default SafetyTemplateList;
