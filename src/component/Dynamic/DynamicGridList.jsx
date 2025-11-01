// src/components/Dynamic/DynamicGridList.jsx
import React from "react";
import "./Dynamic.css";

const DynamicGridList = ({ data, onEdit, onDelete }) => {
  if (!data || data.length === 0) return <p>No data found</p>;

  const headers = Object.keys(data[0]).filter(key => key !== "_id" && key !== "__v");

  return (
    <div className="dynamic-table-container">
      <table className="dynamic-grid">
        <thead>
          <tr>
            {headers.map((h) => <th key={h}>{h}</th>)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {headers.map((h) => (
                <td key={h}>
                  {typeof item[h] === "object" ? JSON.stringify(item[h]) : item[h]}
                </td>
              ))}
              <td>
                <button className="dynamic-btn" onClick={() => onEdit(item._id)}>Edit</button>
                <button className="dynamic-btn" onClick={() => onDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicGridList;
