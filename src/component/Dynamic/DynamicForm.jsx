
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

    // ✅ Initialize missing object or array on edit
    if (value === undefined) {
      if (field.subfields) {
        value = Array.isArray(field.subfields) ? [] : {};
        setValue(fieldPath, value);
      } else {
        value = "";
      }
    }

    // ✅ Text input
    if (!field.subfields && typeof value !== "object") {
      return (
        <div className="form-group" key={fieldPath}>
          <label>{field.fields}</label>
          <input
            value={value}
            onChange={(e) => setValue(fieldPath, e.target.value)}
          />
        </div>
      );
    }

    // ✅ Nested object
    if (typeof value === "object" && !Array.isArray(value)) {
      return (
        <div key={fieldPath} className="nested-group">
          <h4>{field.fields}</h4>
          {(field.subfields || []).map((sub) => renderField(sub, fieldPath))}
        </div>
      );
    }

    // ✅ Array of objects
    if (Array.isArray(value)) {
      return (
        <div key={fieldPath} className="nested-group">
          <h4>{field.fields}</h4>

          {value.map((item, idx) => (
            <div className="nested-item" key={idx}>
              {(field.subfields || []).map((sub) =>
                renderField(sub, `${fieldPath}.${idx}`)
              )}
              <button className="dynamic-btn" onClick={() => removeArrayItem(fieldPath, idx)}>
                Remove
              </button>
            </div>
          ))}

          <button className="dynamic-btn" onClick={() => addArrayItem(fieldPath, {})}>
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

