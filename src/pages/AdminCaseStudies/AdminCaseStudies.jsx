// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AdminCaseStudies.css";

// const BACKEND_URL = "https://safesite-backend.vercel.app";

// const AdminCaseStudies = () => {
//   const [caseStudies, setCaseStudies] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   const emptyCaseStudy = () => ({
//     page: "ResourceCasestudies",
//     featured: {
//       image: "",
//       tag: "",
//       readTime: "",
//       title: "",
//       description: "",
//       author: "",
//       date: "",
//     },
//     topicsSection: {
//       id: "",
//       sectionTitle: "",
//       viewAllLink: { text: "", url: "" },
//       topics: [],
//     },
//     testimonials: [],
//   });

//   const [caseStudyData, setCaseStudyData] = useState(emptyCaseStudy());

//   // Fetch all case studies
//   const fetchCaseStudies = async () => {
//     try {
//       const res = await axios.get(`${BACKEND_URL}/api/casestudies`);
//       setCaseStudies(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Error fetching case studies");
//     }
//   };

//   useEffect(() => {
//     fetchCaseStudies();
//   }, []);

//   useEffect(() => {
//     if (editingId) {
//       const selected = caseStudies.find((c) => c._id === editingId);
//       if (selected) setCaseStudyData(selected);
//     } else {
//       setCaseStudyData(emptyCaseStudy());
//     }
//   }, [editingId, caseStudies]);

//   // Handle featured changes
//   const handleFeaturedChange = (e) => {
//     const { name, value } = e.target;
//     setCaseStudyData({
//       ...caseStudyData,
//       featured: { ...caseStudyData.featured, [name]: value },
//     });
//   };

//   // Handle topics section
//   const handleTopicsChange = (e) => {
//     const { name, value } = e.target;
//     setCaseStudyData({
//       ...caseStudyData,
//       topicsSection: { ...caseStudyData.topicsSection, [name]: value },
//     });
//   };

//   const handleViewAllChange = (e) => {
//     const { name, value } = e.target;
//     setCaseStudyData({
//       ...caseStudyData,
//       topicsSection: {
//         ...caseStudyData.topicsSection,
//         viewAllLink: { ...caseStudyData.topicsSection.viewAllLink, [name]: value },
//       },
//     });
//   };

//   // Handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await axios.put(`${BACKEND_URL}/api/casestudies/${editingId}`, caseStudyData);
//       } else {
//         await axios.post(`${BACKEND_URL}/api/casestudies`, caseStudyData);
//       }
//       alert("Case Study saved successfully!");
//       fetchCaseStudies();
//       setEditingId(null);
//       setCaseStudyData(emptyCaseStudy());
//     } catch (err) {
//       console.error(err);
//       alert("Error saving case study");
//     }
//   };

//   // Delete
//   const deleteCaseStudy = async (id) => {
//     if (window.confirm("Are you sure to delete this case study?")) {
//       try {
//         await axios.delete(`${BACKEND_URL}/api/casestudies/${id}`);
//         fetchCaseStudies();
//       } catch (err) {
//         console.error(err);
//         alert("Error deleting case study");
//       }
//     }
//   };

//   return (
//     <div className="admin-casestudies-container">
//       <h2>{editingId ? "Edit Case Study" : "Add New Case Study"}</h2>

//       <form onSubmit={handleSubmit} className="casestudy-form card">
//         <h3>Featured Section</h3>
//         {["image", "tag", "readTime", "title", "description", "author", "date"].map(
//           (field) => (
//             <div className="form-group" key={field}>
//               <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//               <input
//                 name={field}
//                 value={caseStudyData.featured[field]}
//                 onChange={handleFeaturedChange}
//                 placeholder={`Enter ${field}`}
//               />
//             </div>
//           )
//         )}

//         <h3>Topics Section</h3>
//         <div className="form-group">
//           <label>Section ID</label>
//           <input
//             name="id"
//             value={caseStudyData.topicsSection.id}
//             onChange={handleTopicsChange}
//             placeholder="Enter section ID"
//           />
//         </div>
//         <div className="form-group">
//           <label>Section Title</label>
//           <input
//             name="sectionTitle"
//             value={caseStudyData.topicsSection.sectionTitle}
//             onChange={handleTopicsChange}
//             placeholder="Enter section title"
//           />
//         </div>
//         <div className="form-group">
//           <label>View All Link Text</label>
//           <input
//             name="text"
//             value={caseStudyData.topicsSection.viewAllLink.text}
//             onChange={handleViewAllChange}
//             placeholder="Enter link text"
//           />
//         </div>
//         <div className="form-group">
//           <label>View All Link URL</label>
//           <input
//             name="url"
//             value={caseStudyData.topicsSection.viewAllLink.url}
//             onChange={handleViewAllChange}
//             placeholder="Enter link URL"
//           />
//         </div>

//         <button type="submit" className="submit-btn">
//           {editingId ? "Update Case Study" : "Add Case Study"}
//         </button>
//       </form>

//       <h3>Existing Case Studies</h3>
//       <div className="casestudies-list">
//         {caseStudies.map((c) => (
//           <div key={c._id} className="casestudy-item card">
//             <strong>{c.featured.title}</strong> ({c.page})
//             <div className="casestudy-actions">
//               <button className="edit-btn" onClick={() => setEditingId(c._id)}>
//                 Edit
//               </button>
//               <button className="delete-btn" onClick={() => deleteCaseStudy(c._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminCaseStudies;










import React, { useState, useEffect } from "react";
import axios from "axios";
import DynamicForm from "../../component/Dynamic/DynamicForm";
import DynamicGridList from "../../component/Dynamic/DynamicGridList";
import data from "../../json/data.json"; // ✅ Import schema JSON
import "./AdminCaseStudies.css";

const BACKEND_URL = "https://safesite-backend.vercel.app";

const AdminCaseStudies = () => {
  const schema = data["26"].AdminCaseStudies; // ✅ Pick your page schema
  const [caseStudies, setCaseStudies] = useState([]);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);

  // ✅ Reset blank object as per schema
  const emptyForm = () => {
    const obj = {};
    schema.forEach((field) => {
      if (field.subfields) {
        obj[field.fields] = Array.isArray(field.subfields) ? [] : {};
      } else {
        obj[field.fields] = "";
      }
    });
    return obj;
  };

  // ✅ Fetch all case studies
  const fetchData = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/casestudies`);
      setCaseStudies(res.data);
    } catch {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
    setFormData(emptyForm());
  }, []);

  // ✅ Submit form
  const handleSubmit = async (data) => {
    try {
      if (editingId) {
        await axios.put(`${BACKEND_URL}/api/casestudies/${editingId}`, data);
        alert("Updated!");
      } else {
        await axios.post(`${BACKEND_URL}/api/casestudies`, data);
        alert("Added!");
      }

      setFormData(emptyForm());
      setEditingId(null);
      fetchData();
    } catch {
      alert("Error saving data");
    }
  };

  // ✅ Edit item
  const handleEdit = (id) => {
    const selected = caseStudies.find((item) => item._id === id);
    setFormData(selected);
    setEditingId(id);
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this?")) return;
    await axios.delete(`${BACKEND_URL}/api/casestudies/${id}`);
    fetchData();
  };

  return (
    <div className="admin-page">
      <h2>Admin Case Studies</h2>

      {/* ✅ DYNAMIC FORM */}
      <DynamicForm
        schema={schema}
        formData={formData}
        onChange={setFormData}
        onSubmit={handleSubmit}
      />

      <hr />

      {/* ✅ GRID LIST */}
      <h3>All Case Studies</h3>
      <DynamicGridList
        data={caseStudies}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdminCaseStudies;
