import React, { useState } from "react";
import "./ClickableTable.css";

const ClickableTable= () => {
  // ⭐ DATA inside component
  const items = [
    {
      id: 1,
      title: "Helmet Detection",
      description:
        "Our AI system detects whether a worker is wearing a safety helmet in real time to avoid head injuries.",
    },
    {
      id: 2,
      title: "Safety Vest Detection",
      description:
        "Smart monitoring ensures workers wear high-visibility vests to prevent accidents on site.",
    },
    {
      id: 3,
      title: "Fall Detection",
      description:
        "AI automatically detects falls and sends emergency alerts to supervisors instantly.",
    },
    {
      id: 4,
      title: "Fire Detection",
      description:
        "Real-time fire detection alerts using advanced image processing to prevent major incidents.",
    },
  ];

  const [activeId, setActiveId] = useState(items[0].id);
  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div className="ctd-wrapper">
      {/* LEFT SIDE TABLE */}
      <div className="ctd-left">
        <table className="ctd-table">
          <thead>
            <tr>
              <th>Safety Feature</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className={activeId === item.id ? "ctd-row active" : "ctd-row"}
                onClick={() => setActiveId(item.id)}
              >
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RIGHT SIDE DESCRIPTION */}
      <div className="ctd-right">
        <h3>{activeItem.title}</h3>
        <p>{activeItem.description}</p>
      </div>
    </div>
  );
};

export default ClickableTable;
