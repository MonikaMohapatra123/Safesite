
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AdminBlog.css";

// const BACKEND_URL = "https://safesite-backend.vercel.app";

// const AdminBlog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [blogData, setBlogData] = useState(emptyBlog());

//   function emptyBlog() {
//     return {
//       page: "ResourceBlog",
//       featured: {
//         image: "",
//         tag: "",
//         readTime: "",
//         title: "",
//         description: "",
//         author: "",
//         date: "",
//       },
//       posts: [],
//       blogList: [],
//     };
//   }

//   // Fetch all blogs
//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get(`${BACKEND_URL}/api/blogs`);
//       setBlogs(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Error fetching blogs");
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   useEffect(() => {
//     if (editingId) {
//       const blog = blogs.find((b) => b._id === editingId);
//       if (blog) setBlogData(blog);
//     } else {
//       setBlogData(emptyBlog());
//     }
//   }, [editingId, blogs]);

//   const handleFeaturedChange = (e) => {
//     const { name, value } = e.target;
//     setBlogData({
//       ...blogData,
//       featured: { ...blogData.featured, [name]: value },
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await axios.put(`${BACKEND_URL}/api/blogs/${editingId}`, blogData);
//       } else {
//         await axios.post(`${BACKEND_URL}/api/blogs`, blogData);
//       }
//       alert("Blog saved successfully!");
//       fetchBlogs();
//       setEditingId(null);
//       setBlogData(emptyBlog());
//     } catch (err) {
//       console.error(err);
//       alert("Error saving blog");
//     }
//   };

//   const deleteBlog = async (id) => {
//     if (window.confirm("Are you sure to delete this blog?")) {
//       try {
//         await axios.delete(`${BACKEND_URL}/api/blogs/${id}`);
//         fetchBlogs();
//       } catch (err) {
//         console.error(err);
//         alert("Error deleting blog");
//       }
//     }
//   };

//   return (
//     <div className="admin-blog-container">
//       <h2>{editingId ? "Edit Blog" : "Add New Blog"}</h2>

//       <form onSubmit={handleSubmit} className="blog-form card">
//         <h3>Featured Section</h3>
//         {["image", "tag", "readTime", "title", "description", "author", "date"].map(
//           (field) => (
//             <div className="form-group" key={field}>
//               <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//               <input
//                 name={field}
//                 value={blogData.featured[field]}
//                 onChange={handleFeaturedChange}
//                 placeholder={`Enter ${field}`}
//               />
//             </div>
//           )
//         )}
//         <button type="submit" className="submit-btn">
//           {editingId ? "Update Blog" : "Add Blog"}
//         </button>
//       </form>

//       <h3>Existing Blogs</h3>
//       <div className="blogs-list">
//         {blogs.map((b) => (
//           <div key={b._id} className="blog-item card">
//             <strong>{b.featured.title}</strong> ({b.page})
//             <div className="blog-actions">
//               <button className="edit-btn" onClick={() => setEditingId(b._id)}>
//                 Edit
//               </button>
//               <button className="delete-btn" onClick={() => deleteBlog(b._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminBlog;



// src/pages/AdminBlog/AdminBlog.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

import DynamicForm from "../../component/Dynamic/DynamicForm";
import DynamicGridList from "../../component/Dynamic/DynamicGridList";

import data from "../../json/data.json";
import "./AdminBlog.css";

const BACKEND_URL = "https://safesite-backend.vercel.app";
const blogSchema = data["26"].AdminBlog;

const emptyBlog = () => ({
  page: "ResourceBlog",
  featured: {
    image: "",
    tag: "",
    readTime: "",
    title: "",
    description: "",
    author: "",
    date: "",
  },
  posts: [],
  blogList: [],
});

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyBlog());

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (editingId) {
      const item = blogs.find((b) => b._id === editingId);
      if (item) setFormData(item);
    } else {
      setFormData(emptyBlog());
    }
  }, [editingId, blogs]);

  const handleSubmit = async (updatedBlog) => {
    try {
      if (editingId) {
        await axios.put(`${BACKEND_URL}/api/blogs/${editingId}`, updatedBlog);
        alert("✅ Blog updated successfully");
      } else {
        await axios.post(`${BACKEND_URL}/api/blogs`, updatedBlog);
        alert("✅ Blog added successfully");
      }

      fetchBlogs();
      setEditingId(null);
      setFormData(emptyBlog());
    } catch (err) {
      console.error(err);
      alert("❌ Error saving blog");
    }
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await axios.delete(`${BACKEND_URL}/api/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert("❌ Error deleting blog");
    }
  };

  return (
    <div className="admin-blog-container">
      <h2>{editingId ? "✏️ Edit Blog" : "➕ Add New Blog"}</h2>

      {/* ✅ Dynamic Form */}
      <DynamicForm
        schema={blogSchema}
        formData={formData}
        onChange={setFormData}
        onSubmit={handleSubmit}
      />

      <h3>📄 Existing Blogs</h3>
      
      {/* ✅ Dynamic Table */}
      <DynamicGridList
        data={blogs}
        onEdit={(id) => setEditingId(id)}
        onDelete={deleteBlog}
      />
    </div>
  );
};

export default AdminBlog;



