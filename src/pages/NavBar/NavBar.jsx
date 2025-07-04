

// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { useMediaQuery } from 'react-responsive';

// import './NavBar.css';
// import data from '../../json/data.json';
// import MobileNavBar from './MobileNavBar';

// // === Dropdown item with sections ===
// const NavItemWithDropdown = ({ label, sections, isOpen, onToggle }) => (
//   <div className="NavBar-item NavBar-item-dropdown">
//     <div className="NavBar-item-header" onClick={onToggle}>
//       <span>{label}</span>
//       {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//     </div>

//     {isOpen && (
//       <div className="NavBar-dropdown">
//         <div className="NavBar-dropdown-sections">
//           {sections.map((section, index) => (
//             <div key={index} className="NavBar-dropdown-section">
//               <h4 className="NavBar-dropdown-title">{section.title}</h4>
//               <div className="NavBar-dropdown-links">
//                 {section.links.map((link, idx) => (
//                   <Link
//                     to={link.link}
//                     key={idx}
//                     className="NavBar-dropdown-link"
//                     onClick={onToggle}
//                   >
//                     {link.icon && (
//                       <img
//                         src={link.icon}
//                         alt={`${link.name} icon`}
//                         className="NavBar-dropdown-icon"
//                       />
//                     )}
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>
// );

// // === Desktop version ===
// const DesktopNavBar = ({ getStoreData }) => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navRef = useRef();

//   const handleToggle = (label) => {
//     setOpenDropdown((prev) => (prev === label ? null : label));
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className="NavBar" ref={navRef}>
//       <div className="NavBar-logo">
//         {getStoreData.logo && <img src={getStoreData.logo} alt="logo" />}
//         <span className="NavBar-company">{getStoreData.company}</span>
//       </div>

//       <div className="NavBar-lists">
//         {getStoreData.menu.map((item, index) =>
//           item.sections ? (
//             <NavItemWithDropdown
//               key={index}
//               label={item.name}
//               sections={item.sections}
//               isOpen={openDropdown === item.name}
//               onToggle={() => handleToggle(item.name)}
//             />
//           ) : (
//             <Link key={index} to={item.link} className="NavBar-item">
//               {item.name}
//             </Link>
//           )
//         )}
//       </div>

//       <div className="NavBar-actions">
//         {getStoreData.actions.map((action, index) =>
//           action.type === "button" ? (
//             <button key={index} className="NavBar-button">
//               {action.name}
//             </button>
//           ) : (
//             <Link key={index} to={action.link}>
//               {action.name}
//             </Link>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// // === Main ===
// const NavBar = () => {
//   const isMobile = useMediaQuery({ maxWidth: 1249 });
//   const getStoreData = Object.values(data).find(item => item.page === "navbar");

//   if (!getStoreData) return <div>Navbar data not found.</div>;

//   return isMobile
//     ? <MobileNavBar getStoreData={getStoreData} />
//     : <DesktopNavBar getStoreData={getStoreData} />;
// };

// export default NavBar;







import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import './NavBar.css';
import data from '../../json/data.json';
import MobileNavBar from './MobileNavBar';

// === Dropdown item with sections ===
const NavItemWithDropdown = ({ label, sections, isOpen, onToggle }) => (
  <div className="NavBar-item NavBar-item-dropdown">
    <div className="NavBar-item-header" onClick={onToggle}>
      <span>{label}</span>
      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </div>

    {isOpen && (
      <div className="NavBar-dropdown">
        <div className="NavBar-dropdown-sections">
          {sections.map((section, index) => (
            <div key={index} className="NavBar-dropdown-section">
              <h4 className="NavBar-dropdown-title">{section.title}</h4>
              <div className="NavBar-dropdown-links">
                {section.links.map((link, idx) => (
                  <Link
                    to={link.link}
                    key={idx}
                    className="NavBar-dropdown-link"
                    onClick={onToggle}
                  >
                    {link.icon && (
                      <img
                        src={link.icon}
                        alt={`${link.name} icon`}
                        className="NavBar-dropdown-icon"
                      />
                    )}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// === Desktop version ===
const DesktopNavBar = ({ getStoreData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // ✅ Track scroll
  const navRef = useRef();

  const handleToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`NavBar ${isScrolled ? 'NavBar-scrolled' : ''}`} // ✅ Add class if scrolled
      ref={navRef}
    >
      <div className="NavBar-logo">
        {getStoreData.logo && <img src={getStoreData.logo} alt="logo" />}
        <span className="NavBar-company">{getStoreData.company}</span>
      </div>

      <div className="NavBar-lists">
        {getStoreData.menu.map((item, index) =>
          item.sections ? (
            <NavItemWithDropdown
              key={index}
              label={item.name}
              sections={item.sections}
              isOpen={openDropdown === item.name}
              onToggle={() => handleToggle(item.name)}
            />
          ) : (
            <Link key={index} to={item.link} className="NavBar-item">
              {item.name}
            </Link>
          )
        )}
      </div>

      <div className="NavBar-actions">
        {getStoreData.actions.map((action, index) =>
          action.type === 'button' ? (
            <button key={index} className="NavBar-button">
              {action.name}
            </button>
          ) : (
            <Link key={index} to={action.link}>
              {action.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

// === Main ===
const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 1249 });
  const getStoreData = Object.values(data).find(item => item.page === "navbar");

  if (!getStoreData) return <div>Navbar data not found.</div>;

  return isMobile
    ? <MobileNavBar getStoreData={getStoreData} />
    : <DesktopNavBar getStoreData={getStoreData} />;
};

export default NavBar;
