// src/pages/AdminFeatures/AdminFeatures.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminFeatures.css";

const BACKEND_URL = "https://safesite-backend.vercel.app";

const AdminFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [featureData, setFeatureData] = useState(emptyFeature());

  function emptyFeature() {
    return {
      page: "",
      title: "",
      description: "",
      buttons: [{ type: "", text: "" }],
      images: [""],
      links: [""],
      checkpoints: [
        {
          title: "",
          description: "",
          photo: "",
          details: [{ title: "", description: "" }],
        },
      ],
    };
  }

  const fetchFeatures = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/features`);
      setFeatures(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching features");
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  useEffect(() => {
    if (editingId) {
      const feature = features.find((f) => f._id === editingId);
      if (feature) setFeatureData(feature);
    } else {
      setFeatureData(emptyFeature());
    }
  }, [editingId, features]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeatureData({ ...featureData, [name]: value });
  };

  // ✅ BUTTONS
  const handleButtonChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...featureData.buttons];
    updated[index][name] = value;
    setFeatureData({ ...featureData, buttons: updated });
  };
  const addButton = () =>
    setFeatureData({
      ...featureData,
      buttons: [...featureData.buttons, { type: "", text: "" }],
    });
  const removeButton = (i) =>
    setFeatureData({
      ...featureData,
      buttons: featureData.buttons.filter((_, idx) => idx !== i),
    });

  // ✅ IMAGES
  const handleImageChange = (index, e) => {
    const newImages = [...featureData.images];
    newImages[index] = e.target.value;
    setFeatureData({ ...featureData, images: newImages });
  };
  const addImage = () =>
    setFeatureData({ ...featureData, images: [...featureData.images, ""] });
  const removeImage = (index) =>
    setFeatureData({
      ...featureData,
      images: featureData.images.filter((_, i) => i !== index),
    });

  // ✅ LINKS
  const handleLinkChange = (index, e) => {
    const newLinks = [...featureData.links];
    newLinks[index] = e.target.value;
    setFeatureData({ ...featureData, links: newLinks });
  };
  const addLink = () =>
    setFeatureData({ ...featureData, links: [...featureData.links, ""] });
  const removeLink = (i) =>
    setFeatureData({
      ...featureData,
      links: featureData.links.filter((_, idx) => idx !== i),
    });

  // ✅ CHECKPOINTS
  const handleCheckpointChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...featureData.checkpoints];
    updated[index][name] = value;
    setFeatureData({ ...featureData, checkpoints: updated });
  };

  const addCheckpoint = () =>
    setFeatureData({
      ...featureData,
      checkpoints: [
        ...featureData.checkpoints,
        { title: "", description: "", photo: "", details: [{ title: "", description: "" }] },
      ],
    });

  const removeCheckpoint = (i) =>
    setFeatureData({
      ...featureData,
      checkpoints: featureData.checkpoints.filter((_, idx) => idx !== i),
    });

  // ✅ DETAILS inside Checkpoint
  const handleDetailChange = (cIndex, dIndex, e) => {
    const { name, value } = e.target;
    const updatedCheckpoints = [...featureData.checkpoints];
    updatedCheckpoints[cIndex].details[dIndex][name] = value;
    setFeatureData({ ...featureData, checkpoints: updatedCheckpoints });
  };

  const addDetail = (cIndex) => {
    const updated = [...featureData.checkpoints];
    updated[cIndex].details.push({ title: "", description: "" });
    setFeatureData({ ...featureData, checkpoints: updated });
  };

  const removeDetail = (cIndex, dIndex) => {
    const updated = [...featureData.checkpoints];
    updated[cIndex].details.splice(dIndex, 1);
    setFeatureData({ ...featureData, checkpoints: updated });
  };

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId)
        await axios.put(`${BACKEND_URL}/api/features/${editingId}`, featureData);
      else await axios.post(`${BACKEND_URL}/api/features`, featureData);

      alert("Feature saved successfully!");
      fetchFeatures();
      setEditingId(null);
      setFeatureData(emptyFeature());
    } catch (err) {
      console.error(err);
      alert("Error saving feature");
    }
  };

  // ✅ Delete
  const deleteFeature = async (id) => {
    if (window.confirm("Are you sure to delete this feature?")) {
      try {
        await axios.delete(`${BACKEND_URL}/api/features/${id}`);
        fetchFeatures();
      } catch (err) {
        alert("Error deleting feature");
      }
    }
  };

  return (
    <div className="admin-features-container">
      <h2 className="page-title">{editingId ? "Edit Feature" : "Add New Feature"}</h2>

      <form onSubmit={handleSubmit} className="feature-form card">
        {/* PAGE */}
        <div className="form-group">
          <label>Page:</label>
          <input name="page" value={featureData.page} onChange={handleChange} required />
        </div>

        {/* TITLE */}
        <div className="form-group">
          <label>Title:</label>
          <input name="title" value={featureData.title} onChange={handleChange} />
        </div>

        {/* DESCRIPTION */}
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={featureData.description} onChange={handleChange} />
        </div>

        {/* BUTTONS */}
        <div className="form-group">
          <label>Buttons:</label>
          {featureData.buttons.map((btn, i) => (
            <div className="button-row" key={i}>
              <input
                name="type"
                placeholder="Type"
                value={btn.type}
                onChange={(e) => handleButtonChange(i, e)}
              />
              <input
                name="text"
                placeholder="Text"
                value={btn.text}
                onChange={(e) => handleButtonChange(i, e)}
              />
              <button type="button" className="remove-btn" onClick={() => removeButton(i)}>
                ✖
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addButton}>
            + Add Button
          </button>
        </div>

        {/* IMAGES */}
        <div className="form-group">
          <label>Images (URLs):</label>
          {featureData.images.map((img, i) => (
            <div className="button-row" key={i}>
              <input
                placeholder="Image URL"
                value={img}
                onChange={(e) => handleImageChange(i, e)}
              />
              <button type="button" className="remove-btn" onClick={() => removeImage(i)}>
                ✖
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addImage}>
            + Add Image
          </button>
        </div>

        {/* LINKS */}
        <div className="form-group">
          <label>Links:</label>
          {featureData.links.map((link, i) => (
            <div className="button-row" key={i}>
              <input
                placeholder="Link URL"
                value={link}
                onChange={(e) => handleLinkChange(i, e)}
              />
              <button type="button" className="remove-btn" onClick={() => removeLink(i)}>
                ✖
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addLink}>
            + Add Link
          </button>
        </div>

        {/* CHECKPOINTS */}
        <div className="form-group">
          <label>Checkpoints:</label>
          {featureData.checkpoints.map((cp, cIndex) => (
            <div key={cIndex} className="checkpoint-card">
              <input
                name="title"
                placeholder="Checkpoint Title"
                value={cp.title}
                onChange={(e) => handleCheckpointChange(cIndex, e)}
              />
              <textarea
                name="description"
                placeholder="Checkpoint Description"
                value={cp.description}
                onChange={(e) => handleCheckpointChange(cIndex, e)}
              />
              <input
                name="photo"
                placeholder="Photo URL"
                value={cp.photo}
                onChange={(e) => handleCheckpointChange(cIndex, e)}
              />

              <div className="details-group">
                <strong>Details:</strong>
                {cp.details.map((d, dIndex) => (
                  <div key={dIndex} className="button-row">
                    <input
                      name="title"
                      placeholder="Detail Title"
                      value={d.title}
                      onChange={(e) => handleDetailChange(cIndex, dIndex, e)}
                    />
                    <input
                      name="description"
                      placeholder="Detail Description"
                      value={d.description}
                      onChange={(e) => handleDetailChange(cIndex, dIndex, e)}
                    />
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeDetail(cIndex, dIndex)}
                    >
                      ✖
                    </button>
                  </div>
                ))}
                <button type="button" className="add-btn" onClick={() => addDetail(cIndex)}>
                  + Add Detail
                </button>
              </div>

              <button type="button" className="remove-btn" onClick={() => removeCheckpoint(cIndex)}>
                Remove Checkpoint
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addCheckpoint}>
            + Add Checkpoint
          </button>
        </div>

        <button type="submit" className="submit-btn">
          {editingId ? "Update Feature" : "Add Feature"}
        </button>
      </form>

      {/* Existing Features */}
      <h3 className="existing-title">Existing Features</h3>
      <div className="features-grid">
        {features.map((f) => (
          <div key={f._id} className="feature-card card">
            <h4>{f.title}</h4>
            <div className="feature-page">{f.page}</div>
            <div className="feature-actions">
              <button className="edit-btn" onClick={() => setEditingId(f._id)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteFeature(f._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFeatures;
