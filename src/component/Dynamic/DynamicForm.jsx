
import React from "react";
import "./Dynamic.css";

const DynamicForm = ({ schema, formData, onChange, onSubmit }) => {

  const setValue = (path, value) => {
    const keys = path.split(".");
    const updated = structuredClone(formData);
    let obj = updated;

    keys.forEach((key, idx) => {
      if (idx === keys.length - 1) {
        obj[key] = value;
      } else {
        if (!obj[key]) obj[key] = {};
        obj = obj[key];
      }
    });

    onChange(updated);
  };

  const getValue = (path) =>
    path.split(".").reduce((o, k) => (o ? o[k] : undefined), formData);

  const addArrayItem = (path, defaultObj) => {
    const keys = path.split(".");
    const updated = structuredClone(formData);
    let obj = updated;

    keys.forEach((k, i) => {
      if (i === keys.length - 1) {
        if (!Array.isArray(obj[k])) obj[k] = [];
        obj[k].push(defaultObj);
      } else {
        if (!obj[k]) obj[k] = {};
        obj = obj[k];
      }
    });

    onChange(updated);
  };

  const removeArrayItem = (path, index) => {
    const keys = path.split(".");
    const updated = structuredClone(formData);
    let obj = updated;

    keys.forEach((k, i) => {
      if (i === keys.length - 1 && Array.isArray(obj[k])) {
        obj[k].splice(index, 1);
      } else obj = obj[k];
    });

    onChange(updated);
  };

  const renderField = (field, parent = "") => {
    const fieldPath = parent ? `${parent}.${field.fields}` : field.fields;
    let value = getValue(fieldPath);

    if (value === undefined) {
      if (field.subfields) {
        value = Array.isArray(field.subfields) ? [] : {};
        setValue(fieldPath, value);
      } else {
        value = "";
      }
    }

    // ✅ Image Upload Field
    if (
      !field.subfields &&
      (field.type === "image" || field.fields.toLowerCase().includes("image"))
    ) {
      return (
        <div className="form-group" key={fieldPath}>
          <label>{field.fields}</label>

          {/* ✅ Show preview on Edit */}
          {value && typeof value === "string" && value !== "" && (
            <img
              src={value}
              alt="preview"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                marginBottom: "6px",
                borderRadius: "6px"
              }}
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const imageURL = URL.createObjectURL(file);
                setValue(fieldPath, imageURL);
              }
            }}
          />

          {/* ✅ Remove image */}
          {value && (
            <button
              type="button"
              className="dynamic-btn"
              onClick={() => setValue(fieldPath, "")}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          )}
        </div>
      );
    }

    // ✅ Normal text input
    if (!field.subfields && typeof value !== "object") {
      return (
        <div className="form-group" key={fieldPath}>
          <label>{field.fields}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(fieldPath, e.target.value)}
          />
        </div>
      );
    }

    // ✅ Object Field
    if (typeof value === "object" && !Array.isArray(value)) {
      return (
        <div key={fieldPath} className="nested-group">
          <h4>{field.fields}</h4>
          {(field.subfields || []).map((sub) => renderField(sub, fieldPath))}
        </div>
      );
    }

    // ✅ Array Field
    if (Array.isArray(value)) {
      return (
        <div key={fieldPath} className="nested-group">
          <h4>{field.fields}</h4>

          {value.map((item, idx) => (
            <div className="nested-item" key={idx}>
              {(field.subfields || []).map((sub) =>
                renderField(sub, `${fieldPath}.${idx}`)
              )}

              <button
                type="button"
                className="dynamic-btn"
                onClick={() => removeArrayItem(fieldPath, idx)}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            className="dynamic-btn"
            onClick={() => addArrayItem(fieldPath, {})}
          >
            Add {field.fields}
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className="dynamic-form"
    >
      {schema.map((field) => renderField(field))}
      <button className="btn-save" type="submit">Save</button>
    </form>
  );
};

export default DynamicForm;

