

import React, { useState, useEffect } from "react";
import axios from "axios";
import DynamicForm from "../../component/Dynamic/DynamicForm";
import DynamicGridList from "../../component/Dynamic/DynamicGridList";
import dataJson from "../../json/data.json";
import "./AdminFeatures.css";

const BACKEND_URL = "https://safesite-backend.vercel.app";

// ✅ Extract schema from JSON id:26 → AdminFeatures
const featureSchema = dataJson["26"].AdminFeatures;

const emptyFeature = () => {
  let obj = {};
  featureSchema.forEach(field => {
    if (field.subfields) {
      obj[field.fields] = Array.isArray(field.subfields) ? [] : {};
    } else {
      obj[field.fields] = "";
    }
  });
  return obj;
};

const AdminFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [featureData, setFeatureData] = useState(emptyFeature());

  const fetchFeatures = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/features`);
      setFeatures(res.data);
    } catch (err) {
      alert("Error fetching features");
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  useEffect(() => {
    if (editingId && editingId !== "new") {
      const feature = features.find((f) => f._id === editingId);
      if (feature) setFeatureData(feature);
    } else {
      setFeatureData(emptyFeature());
    }
  }, [editingId, features]);

  const onSubmit = async (data) => {
    try {
      if (editingId && editingId !== "new") {
        await axios.put(`${BACKEND_URL}/api/features/${editingId}`, data);
      } else {
        await axios.post(`${BACKEND_URL}/api/features`, data);
      }
      alert("✅ Saved successfully");
      fetchFeatures();
      setEditingId(null);
    } catch (err) {
      alert("❌ Error saving data");
    }
  };

  const deleteFeature = async (id) => {
    if (!window.confirm("Delete this feature?")) return;
    await axios.delete(`${BACKEND_URL}/api/features/${id}`);
    fetchFeatures();
  };

  return (
    <div className="admin-container">
      {!editingId && (
        <>
          <h2>Features</h2>
          <button onClick={() => setEditingId("new")}>+ Add Feature</button>

          <DynamicGridList
            data={features}
            onEdit={(id) => setEditingId(id)}
            onDelete={deleteFeature}
          />
        </>
      )}

      {editingId && (
        <>
          <h2>{editingId === "new" ? "Add Feature" : "Edit Feature"}</h2>
          <DynamicForm
            schema={featureSchema}
            formData={featureData}
            onChange={setFeatureData}
            onSubmit={onSubmit}
          />
          <button className="back-btn" onClick={() => setEditingId(null)}>
            ⬅ Back
          </button>
        </>
      )}
    </div>
  );
};

export default AdminFeatures;



