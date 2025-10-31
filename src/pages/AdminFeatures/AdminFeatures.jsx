// // src/pages/AdminFeatures/AdminFeatures.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AdminFeatures.css";

// const BACKEND_URL = "https://safesite-backend.vercel.app";

// const emptyFeature = () => ({
//   page: "",
//   title: "",
//   description: "",
//   buttons: [{ type: "", text: "" }],
//   images: [""],
//   links: [""],
//   checkpoints: [
//     {
//       title: "",
//       description: "",
//       photo: "",
//       details: [{ title: "", description: "" }],
//     },
//   ],
// });

// const AdminFeatures = () => {
//   const [features, setFeatures] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [featureData, setFeatureData] = useState(emptyFeature());

//   const fetchFeatures = async () => {
//     try {
//       const res = await axios.get(`${BACKEND_URL}/api/features`);
//       setFeatures(res.data);
//     } catch {
//       alert("Error fetching features");
//     }
//   };

//   useEffect(() => {
//     fetchFeatures();
//   }, []);

//   useEffect(() => {
//     if (editingId && editingId !== "new") {
//       const feature = features.find((f) => f._id === editingId);
//       if (feature) setFeatureData(feature);
//     } else {
//       setFeatureData(emptyFeature());
//     }
//   }, [editingId, features]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFeatureData({ ...featureData, [name]: value });
//   };

//   const handleButtonChange = (i, e) => {
//     const { name, value } = e.target;
//     const updated = [...featureData.buttons];
//     updated[i][name] = value;
//     setFeatureData({ ...featureData, buttons: updated });
//   };

//   const addButton = () =>
//     setFeatureData({
//       ...featureData,
//       buttons: [...featureData.buttons, { type: "", text: "" }],
//     });

//   const removeButton = (i) =>
//     setFeatureData({
//       ...featureData,
//       buttons: featureData.buttons.filter((_, idx) => idx !== i),
//     });

//   const handleImageChange = (i, e) => {
//     const updated = [...featureData.images];
//     updated[i] = e.target.value;
//     setFeatureData({ ...featureData, images: updated });
//   };

//   const addImage = () =>
//     setFeatureData({ ...featureData, images: [...featureData.images, ""] });

//   const removeImage = (i) =>
//     setFeatureData({
//       ...featureData,
//       images: featureData.images.filter((_, idx) => idx !== i),
//     });

//   const handleLinkChange = (i, e) => {
//     const updated = [...featureData.links];
//     updated[i] = e.target.value;
//     setFeatureData({ ...featureData, links: updated });
//   };

//   const addLink = () =>
//     setFeatureData({ ...featureData, links: [...featureData.links, ""] });

//   const removeLink = (i) =>
//     setFeatureData({
//       ...featureData,
//       links: featureData.links.filter((_, idx) => idx !== i),
//     });

//   const handleCheckpointChange = (i, e) => {
//     const { name, value } = e.target;
//     const updated = [...featureData.checkpoints];
//     updated[i][name] = value;
//     setFeatureData({ ...featureData, checkpoints: updated });
//   };

//   const addCheckpoint = () =>
//     setFeatureData({
//       ...featureData,
//       checkpoints: [
//         ...featureData.checkpoints,
//         { title: "", description: "", photo: "", details: [{ title: "", description: "" }] },
//       ],
//     });

//   const removeCheckpoint = (i) =>
//     setFeatureData({
//       ...featureData,
//       checkpoints: featureData.checkpoints.filter((_, idx) => idx !== i),
//     });

//   const handleDetailChange = (c, d, e) => {
//     const { name, value } = e.target;
//     const updated = [...featureData.checkpoints];
//     updated[c].details[d][name] = value;
//     setFeatureData({ ...featureData, checkpoints: updated });
//   };

//   const addDetail = (c) => {
//     const updated = [...featureData.checkpoints];
//     updated[c].details.push({ title: "", description: "" });
//     setFeatureData({ ...featureData, checkpoints: updated });
//   };

//   const removeDetail = (c, d) => {
//     const updated = [...featureData.checkpoints];
//     updated[c].details.splice(d, 1);
//     setFeatureData({ ...featureData, checkpoints: updated });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId && editingId !== "new") {
//         await axios.put(`${BACKEND_URL}/api/features/${editingId}`, featureData);
//       } else {
//         await axios.post(`${BACKEND_URL}/api/features`, featureData);
//       }
//       alert("Saved successfully!");
//       fetchFeatures();
//       setEditingId(null);
//     } catch {
//       alert("Error saving");
//     }
//   };

//   const deleteFeature = async (id) => {
//     if (window.confirm("Delete this feature?")) {
//       await axios.delete(`${BACKEND_URL}/api/features/${id}`);
//       fetchFeatures();
//     }
//   };

//   return (
//     <div className="admin-features-container">

//       {/* Top bar */}
//       {!editingId ? (
//         <div >
//           <h2 className="page-title">Features</h2>
//           <button className="add-btn" onClick={() => setEditingId("new")}>
//             + Create Feature
//           </button>
//         </div>
//       ) : (
//         <h2 className="page-title">{editingId === "new" ? "Add Feature" : "Edit Feature"}</h2>
//       )}

//       {/* ✅ FORM */}
//       {editingId && (
//         <form onSubmit={handleSubmit} className="feature-form card">

//           <div className="form-group">
//             <label>Page:</label>
//             <input name="page" value={featureData.page} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Title:</label>
//             <input name="title" value={featureData.title} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label>Description:</label>
//             <textarea name="description" value={featureData.description} onChange={handleChange} />
//           </div>

//           {/* BUTTONS */}
//           <div className="form-group">
//             <label>Buttons:</label>
//             {featureData.buttons.map((btn, i) => (
//               <div className="button-row" key={i}>
//                 <input name="type" placeholder="Type" value={btn.type} onChange={(e) => handleButtonChange(i, e)} />
//                 <input name="text" placeholder="Text" value={btn.text} onChange={(e) => handleButtonChange(i, e)} />
//                 <button type="button" className="remove-btn" onClick={() => removeButton(i)}>✖</button>
//               </div>
//             ))}
//             <button type="button" className="add-btn" onClick={addButton}>+ Add Button</button>
//           </div>

//           {/* IMAGES */}
//           <div className="form-group">
//             <label>Images:</label>
//             {featureData.images.map((img, i) => (
//               <div className="button-row" key={i}>
//                 <input placeholder="Image URL" value={img} onChange={(e) => handleImageChange(i, e)} />
//                 <button type="button" className="remove-btn" onClick={() => removeImage(i)}>✖</button>
//               </div>
//             ))}
//             <button type="button" className="add-btn" onClick={addImage}>+ Add Image</button>
//           </div>

//           {/* LINKS */}
//           <div className="form-group">
//             <label>Links:</label>
//             {featureData.links.map((lnk, i) => (
//               <div className="button-row" key={i}>
//                 <input placeholder="Link URL" value={lnk} onChange={(e) => handleLinkChange(i, e)} />
//                 <button type="button" className="remove-btn" onClick={() => removeLink(i)}>✖</button>
//               </div>
//             ))}
//             <button type="button" className="add-btn" onClick={addLink}>+ Add Link</button>
//           </div>

//           {/* CHECKPOINTS */}
//           <div className="form-group">
//             <label>Checkpoints:</label>
//             {featureData.checkpoints.map((cp, ci) => (
//               <div className="checkpoint-card" key={ci}>
//                 <input name="title" placeholder="Title" value={cp.title} onChange={(e) => handleCheckpointChange(ci, e)} />
//                 <textarea name="description" placeholder="Description" value={cp.description} onChange={(e) => handleCheckpointChange(ci, e)} />
//                 <input name="photo" placeholder="Photo URL" value={cp.photo} onChange={(e) => handleCheckpointChange(ci, e)} />

//                 <div className="details-group">
//                   <strong>Details</strong>
//                   {cp.details.map((d, di) => (
//                     <div className="button-row" key={di}>
//                       <input name="title" placeholder="Detail Title" value={d.title} onChange={(e) => handleDetailChange(ci, di, e)} />
//                       <input name="description" placeholder="Detail Description" value={d.description} onChange={(e) => handleDetailChange(ci, di, e)} />
//                       <button type="button" className="remove-btn" onClick={() => removeDetail(ci, di)}>✖</button>
//                     </div>
//                   ))}
//                   <button type="button" className="add-btn" onClick={() => addDetail(ci)}>+ Add Detail</button>
//                 </div>

//                 <button type="button" className="remove-btn" onClick={() => removeCheckpoint(ci)}>Remove Checkpoint</button>
//               </div>
//             ))}
//             <button type="button" className="add-btn" onClick={addCheckpoint}>+ Add Checkpoint</button>
//           </div>

//           <button type="submit" className="submit-btn">{editingId === "new" ? "Add Feature" : "Update Feature"}</button>
//           <button type="button" className="remove-btn" style={{ width: "100%", marginTop: "10px" }} onClick={() => setEditingId(null)}>Cancel</button>
//         </form>
//       )}

//       {/* ✅ LIST VIEW */}
//       {!editingId && (
//         <>
//              {/* <h3 className="existing-title">Existing Features</h3> */}

// <div className="features-list">
//   <div className="feature-header">
//     <div className="col-heading">Page</div>
//     <div className="col-heading">Title</div>
//     <div className="col-heading actions-col">Actions</div>
//   </div>

//   {features.map((f) => (
//     <div className="feature-row" key={f._id}>
//       <div className="feature-page">{f.page}</div>
//       <div className="feature-title">{f.title}</div>

//       <div className="feature-btns">
//         <button className="edit-btn" onClick={() => setEditingId(f._id)}>Edit</button>
//         <button className="delete-btn" onClick={() => deleteFeature(f._id)}>Delete</button>
//       </div>
//     </div>
//   ))}
// </div>


//         </>
//       )}

//     </div>
//   );
// };

// export default AdminFeatures;







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



