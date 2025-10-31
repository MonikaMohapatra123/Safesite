import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminIndustry.css";

const BACKEND_URL = "https://safesite-backend.vercel.app";

const emptyIndustry = () => ({
  page: "",
  title: "",
  description: "",
  image: "",
  checkpoints: [
    { title: "", photo: "", details: [{ title: "", description: "" }] }
  ]
});

const AdminIndustry = () => {
  const [industries, setIndustries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyIndustry());

  const fetchIndustries = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/industries`);
      setIndustries(res.data);
    } catch (err) {
      alert("Error fetching industries");
    }
  };

  useEffect(() => {
    fetchIndustries();
  }, []);

  useEffect(() => {
    if (editingId && editingId !== "new") {
      const industry = industries.find((i) => i._id === editingId);
      if (industry) setFormData(industry);
    } else {
      setFormData(emptyIndustry());
    }
  }, [editingId, industries]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckpointChange = (i, e) => {
    const updated = [...formData.checkpoints];
    updated[i][e.target.name] = e.target.value;
    setFormData({ ...formData, checkpoints: updated });
  };

  const addCheckpoint = () =>
    setFormData({
      ...formData,
      checkpoints: [
        ...formData.checkpoints,
        { title: "", photo: "", details: [{ title: "", description: "" }] }
      ]
    });

  const removeCheckpoint = (i) =>
    setFormData({
      ...formData,
      checkpoints: formData.checkpoints.filter((_, idx) => idx !== i)
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId && editingId !== "new") {
        await axios.put(`${BACKEND_URL}/api/industries/${editingId}`, formData);
      } else {
        await axios.post(`${BACKEND_URL}/api/industries`, formData);
      }
      alert("Saved successfully!");
      fetchIndustries();
      setEditingId(null);
    } catch {
      alert("Error saving industry");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this industry?")) {
      await axios.delete(`${BACKEND_URL}/api/industries/${id}`);
      fetchIndustries();
    }
  };

  return (
    <div className="admin-industry-container">

      {/* ✅ Top bar like AdminFeatures */}
      {!editingId ? (
        <div>
          <h2 className="page-title">Industries</h2>
          <button className="add-btn" onClick={() => setEditingId("new")}>
            + Create Industry
          </button>
        </div>
      ) : (
        <h2 className="page-title">{editingId === "new" ? "Add Industry" : "Edit Industry"}</h2>
      )}

      {/* ✅ FORM ON CLICK */}
      {editingId && (
        <form className="industry-form card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Page:</label>
            <input name="page" value={formData.page} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Title:</label>
            <input name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>

          <div className="form-group">
            <label>Image URL:</label>
            <input name="image" value={formData.image} onChange={handleChange}/>
          </div>

          {/* ✅ Checkpoints */}
          <div className="form-group">
            <label>Checkpoints:</label>
            {formData.checkpoints.map((cp, i) => (
              <div key={i} className="checkpoint-row">
                <input name="title" placeholder="Checkpoint Title" value={cp.title} onChange={(e) => handleCheckpointChange(i, e)} />
                <input name="photo" placeholder="Photo URL" value={cp.photo} onChange={(e) => handleCheckpointChange(i, e)} />
                <button type="button" className="remove-btn" onClick={() => removeCheckpoint(i)}>✖</button>
              </div>
            ))}
            <button type="button" className="add-btn" onClick={addCheckpoint}>+ Add Checkpoint</button>
          </div>

          <button type="submit" className="submit-btn">
            {editingId === "new" ? "Add Industry" : "Update Industry"}
          </button>
        </form>
      )}

      {/* ✅ Existing Industries list */}
      {!editingId && (
      <>
        <h3 className="existing-title">Existing Industries</h3>
        <ul className="features-list">
          {industries.map((ind) => (
            <li key={ind._id} className="feature-item">
              <div>
                <strong>{ind.title}</strong> <br />
                <small>Page: {ind.page}</small>
              </div>
              <div>
                <button className="edit-btn" onClick={() => setEditingId(ind._id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(ind._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </>
      )}
    </div>
  );
};

export default AdminIndustry;
