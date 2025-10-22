import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminIndustry.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const AdminIndustry = () => {
  const [industries, setIndustries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    checkpoints: [
      {
        title: "",
        photo: "",
        details: [{ title: "", description: "" }],
      },
    ],
  });

  // ✅ Fetch industries
  const fetchIndustries = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/industries`);
      setIndustries(res.data);
    } catch (err) {
      console.error("Error fetching industries:", err);
      alert("Failed to load industries");
    }
  };

  useEffect(() => {
    fetchIndustries();
  }, []);

  // ✅ Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Checkpoint handling
  const handleCheckpointChange = (index, e) => {
    const { name, value } = e.target;
    const newCheckpoints = [...formData.checkpoints];
    newCheckpoints[index][name] = value;
    setFormData({ ...formData, checkpoints: newCheckpoints });
  };

  const addCheckpoint = () => {
    setFormData({
      ...formData,
      checkpoints: [
        ...formData.checkpoints,
        { title: "", photo: "", details: [{ title: "", description: "" }] },
      ],
    });
  };

  const removeCheckpoint = (index) => {
    const updated = formData.checkpoints.filter((_, i) => i !== index);
    setFormData({ ...formData, checkpoints: updated });
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${BACKEND_URL}/api/industries/${editingId}`, formData);
        alert("Industry updated successfully!");
      } else {
        await axios.post(`${BACKEND_URL}/api/industries`, formData);
        alert("Industry added successfully!");
      }
      setFormData({
        title: "",
        description: "",
        image: "",
        checkpoints: [
          { title: "", photo: "", details: [{ title: "", description: "" }] },
        ],
      });
      setEditingId(null);
      fetchIndustries();
    } catch (err) {
      console.error("Error saving industry:", err);
      alert("Error saving industry");
    }
  };

  // ✅ Edit
  const handleEdit = (industry) => {
    setEditingId(industry._id);
    setFormData(industry);
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this industry?")) return;
    try {
      await axios.delete(`${BACKEND_URL}/api/industries/${id}`);
      fetchIndustries();
    } catch (err) {
      console.error("Error deleting industry:", err);
    }
  };

  return (
    <div className="admin-industry-container">
      <h2 className="page-title">{editingId ? "Edit Industry" : "Add New Industry"}</h2>

      <form className="industry-form card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Checkpoints:</label>
          {formData.checkpoints.map((cp, i) => (
            <div key={i} className="checkpoint-row">
              <input
                type="text"
                name="title"
                placeholder="Checkpoint Title"
                value={cp.title}
                onChange={(e) => handleCheckpointChange(i, e)}
              />
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                value={cp.photo}
                onChange={(e) => handleCheckpointChange(i, e)}
              />
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeCheckpoint(i)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addCheckpoint}>
            Add Checkpoint
          </button>
        </div>

        <button type="submit" className="submit-btn">
          {editingId ? "Update Industry" : "Add Industry"}
        </button>
      </form>

      <hr />

      <h3 className="existing-title">Existing Industries</h3>
      <ul className="features-list">
        {industries.map((ind) => (
          <li key={ind._id} className="feature-item">
            <strong>{ind.title}</strong>
            <button className="edit-btn" onClick={() => handleEdit(ind)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => handleDelete(ind._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminIndustry;
