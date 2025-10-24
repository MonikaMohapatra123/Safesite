// // src/pages/AdminFeatures/AdminFeatures.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './AdminFeatures.css';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

// const AdminFeatures = () => {
//   const [features, setFeatures] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [featureData, setFeatureData] = useState({
//     page: "",
//     title: "",
//     description: "",
//     buttons: [{ type: "", text: "" }],
//     images: [""],
//     links: [""],
//     checkpoints: [
//       {
//         title: "",
//         description: "",
//         photo: "",
//         details: [{ title: "", description: "" }]
//       }
//     ]
//   });

//   // Fetch all features
//   const fetchFeatures = async () => {
//     try {
//       const res = await axios.get(`${BACKEND_URL}/api/features`);
//       setFeatures(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Error fetching features");
//     }
//   };

//   useEffect(() => {
//     fetchFeatures();
//   }, []);

//   // Load feature data when editing
//   useEffect(() => {
//     if (editingId) {
//       const feature = features.find(f => f._id === editingId);
//       if (feature) setFeatureData(feature);
//     } else {
//       resetFeatureData();
//     }
//   }, [editingId, features]);

//   const resetFeatureData = () => {
//     setFeatureData({
//       page: "",
//       title: "",
//       description: "",
//       buttons: [{ type: "", text: "" }],
//       images: [""],
//       links: [""],
//       checkpoints: [
//         {
//           title: "",
//           description: "",
//           photo: "",
//           details: [{ title: "", description: "" }]
//         }
//       ]
//     });
//   };

//   // Handle simple input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFeatureData({ ...featureData, [name]: value });
//   };

//   // Handle array of objects (buttons)
//   const handleButtonChange = (index, e) => {
//     const { name, value } = e.target;
//     const newButtons = [...featureData.buttons];
//     newButtons[index][name] = value;
//     setFeatureData({ ...featureData, buttons: newButtons });
//   };

//   const addButton = () => {
//     setFeatureData({
//       ...featureData,
//       buttons: [...featureData.buttons, { type: "", text: "" }]
//     });
//   };

//   const removeButton = (index) => {
//     const newButtons = featureData.buttons.filter((_, i) => i !== index);
//     setFeatureData({ ...featureData, buttons: newButtons });
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await axios.put(`${BACKEND_URL}/api/features/${editingId}`, featureData);
//       } else {
//         await axios.post(`${BACKEND_URL}/api/features`, featureData);
//       }
//       fetchFeatures();
//       setEditingId(null);
//       resetFeatureData();
//       alert("Feature saved successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Error saving feature");
//     }
//   };

//   // Delete feature
//   const deleteFeature = async (id) => {
//     if (window.confirm("Are you sure you want to delete this feature?")) {
//       try {
//         await axios.delete(`${BACKEND_URL}/api/features/${id}`);
//         fetchFeatures();
//       } catch (err) {
//         console.error(err);
//         alert("Error deleting feature");
//       }
//     }
//   };

//   return (
//     <div className="admin-features-container">
//       <h2>{editingId ? "Edit Feature" : "Add New Feature"}</h2>

//       <form onSubmit={handleSubmit} className="feature-form">
//         <div className="form-group">
//           <label>Page:</label>
//           <input
//             name="page"
//             value={featureData.page}
//             onChange={handleChange}
//             required
//             placeholder="Enter page name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Title:</label>
//           <input
//             name="title"
//             value={featureData.title}
//             onChange={handleChange}
//             placeholder="Enter title"
//           />
//         </div>

//         <div className="form-group">
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={featureData.description}
//             onChange={handleChange}
//             placeholder="Enter description"
//           />
//         </div>

//         <div className="form-group">
//           <label>Buttons:</label>
//           {featureData.buttons.map((btn, i) => (
//             <div key={i} className="button-row">
//               <input
//                 name="type"
//                 placeholder="Type"
//                 value={btn.type}
//                 onChange={(e) => handleButtonChange(i, e)}
//               />
//               <input
//                 name="text"
//                 placeholder="Text"
//                 value={btn.text}
//                 onChange={(e) => handleButtonChange(i, e)}
//               />
//               <button type="button" className="remove-btn" onClick={() => removeButton(i)}>
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button type="button" className="add-btn" onClick={addButton}>
//             Add Button
//           </button>
//         </div>

//         <button type="submit" className="submit-btn">
//           {editingId ? "Update Feature" : "Add Feature"}
//         </button>
//       </form>

//       <hr />

//       <h3>Existing Features</h3>
//       <ul className="features-list">
//         {features.map((f) => (
//           <li key={f._id} className="feature-item">
//             <strong>{f.title}</strong> ({f.page})
//             <button className="edit-btn" onClick={() => setEditingId(f._id)}>Edit</button>
//             <button className="delete-btn" onClick={() => deleteFeature(f._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminFeatures;












// src/pages/AdminFeatures/AdminFeatures.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminFeatures.css";

// ✅ Use your deployed backend on Vercel
const BACKEND_URL = "https://safesite-backend.vercel.app";

const AdminFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [featureData, setFeatureData] = useState({
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
  });

  // ✅ Fetch all features from backend
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

  // ✅ Load feature data when editing
  useEffect(() => {
    if (editingId) {
      const feature = features.find((f) => f._id === editingId);
      if (feature) setFeatureData(feature);
    } else {
      resetFeatureData();
    }
  }, [editingId, features]);

  const resetFeatureData = () => {
    setFeatureData({
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
    });
  };

  // ✅ Handle basic input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeatureData({ ...featureData, [name]: value });
  };

  // ✅ Handle buttons array
  const handleButtonChange = (index, e) => {
    const { name, value } = e.target;
    const newButtons = [...featureData.buttons];
    newButtons[index][name] = value;
    setFeatureData({ ...featureData, buttons: newButtons });
  };

  const addButton = () => {
    setFeatureData({
      ...featureData,
      buttons: [...featureData.buttons, { type: "", text: "" }],
    });
  };

  const removeButton = (index) => {
    const newButtons = featureData.buttons.filter((_, i) => i !== index);
    setFeatureData({ ...featureData, buttons: newButtons });
  };

  // ✅ Handle Submit (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${BACKEND_URL}/api/features/${editingId}`, featureData);
      } else {
        await axios.post(`${BACKEND_URL}/api/features`, featureData);
      }
      fetchFeatures();
      setEditingId(null);
      resetFeatureData();
      alert("Feature saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving feature");
    }
  };

  // ✅ Delete feature
  const deleteFeature = async (id) => {
    if (window.confirm("Are you sure you want to delete this feature?")) {
      try {
        await axios.delete(`${BACKEND_URL}/api/features/${id}`);
        fetchFeatures();
      } catch (err) {
        console.error(err);
        alert("Error deleting feature");
      }
    }
  };

  return (
    <div className="admin-features-container">
      <h2>{editingId ? "Edit Feature" : "Add New Feature"}</h2>

      <form onSubmit={handleSubmit} className="feature-form">
        <div className="form-group">
          <label>Page:</label>
          <input
            name="page"
            value={featureData.page}
            onChange={handleChange}
            required
            placeholder="Enter page name"
          />
        </div>

        <div className="form-group">
          <label>Title:</label>
          <input
            name="title"
            value={featureData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={featureData.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </div>

        <div className="form-group">
          <label>Buttons:</label>
          {featureData.buttons.map((btn, i) => (
            <div key={i} className="button-row">
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
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeButton(i)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addButton}>
            Add Button
          </button>
        </div>

        <button type="submit" className="submit-btn">
          {editingId ? "Update Feature" : "Add Feature"}
        </button>
      </form>

      <hr />

      <h3>Existing Features</h3>
      <ul className="features-list">
        {features.map((f) => (
          <li key={f._id} className="feature-item">
            <strong>{f.title}</strong> ({f.page})
            <button
              className="edit-btn"
              onClick={() => setEditingId(f._id)}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteFeature(f._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminFeatures;

