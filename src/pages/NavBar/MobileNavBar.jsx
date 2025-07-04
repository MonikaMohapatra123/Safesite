
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes, FaPlus } from 'react-icons/fa';
// import './mobile.css';
// import data from '../../json/data.json';

// const MobileNavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navRef = useRef();

//   const getStoreData = Object.values(data).find(item => item.page === "navbar");

//   const handleToggleDropdown = (label) => {
//     setOpenDropdown((prev) => (prev === label ? null : label));
//   };

//   const handleClickOutside = (event) => {
//     if (navRef.current && !navRef.current.contains(event.target)) {
//       setMenuOpen(false);
//       setOpenDropdown(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   if (!getStoreData) {
//     return <div>Navbar data not found.</div>;
//   }

//   return (
//     <nav className="MobileNavBarContainer" ref={navRef}>
//       <div className="MobileNavBarHeader">
//         <Link to="/" onClick={() => setMenuOpen(false)} className="MobileLogoLink">
//           {getStoreData.logo && (
//             <img
//               src={getStoreData.logo}
//               alt="logo-img"
//               className="MobileLogoImage"
//             />
//           )}
//           <span>{getStoreData.company}</span>
//         </Link>
//         <div
//           className="MobileMenuIcon"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       <ul className={`MobileNavBarList ${menuOpen ? 'show' : ''}`}>
//         {getStoreData.menu.map((item, index) =>
//           item.sections ? (   // ✅ FIXED: use sections instead of submenu
//             <li key={index} className="MobileNavBarItem">
//               <div
//                 className="MobileNavBarLinkWithIcon"
//                 onClick={() => handleToggleDropdown(item.name)}
//               >
//                 <span>{item.name}</span>
//                 <FaPlus
//                   className={`MobileMenuIcon-ChevronIcon ${
//                     openDropdown === item.name ? 'MobileMenuIcon-rotate-up' : ''
//                   }`}
//                 />
//               </div>
//               <ul
//                 className={`MobileSubMenuList ${
//                   openDropdown === item.name ? 'show' : ''
//                 }`}
//               >
//                 {item.sections.map((section, sectionIndex) =>
//                   section.links.map((subItem, subIndex) => (
//                     <li key={`${sectionIndex}-${subIndex}`} className="MobileSubMenuItem">
//                       <Link
//                         to={subItem.link}
//                         className="MobileSubMenuLink"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         {subItem.name}
//                       </Link>
//                     </li>
//                   ))
//                 )}
//               </ul>
//             </li>
//           ) : (
//             <li key={index} className="MobileNavBarItem">
//               <Link
//                 to={item.link}
//                 className="MobileNavBarLink"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           )
//         )}

//         <li className="MobileNavBarActions">
//           {getStoreData.actions.map((action, index) =>
//             action.type === 'button' ? (
//               <button key={index} className="MobileNavBarButton">
//                 {action.name}
//               </button>
//             ) : (
//               <Link
//                 key={index}
//                 to={action.link}
//                 className="MobileNavBarLink"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {action.name}
//               </Link>
//             )
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default MobileNavBar;












import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPlus } from 'react-icons/fa';
import './mobile.css';
import data from '../../json/data.json';

const MobileNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  const getStoreData = Object.values(data).find(item => item.page === "navbar");

  const handleToggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!getStoreData) {
    return <div>Navbar data not found.</div>;
  }

  return (
    <nav className="MobileNavBarContainer" ref={navRef}>
      <div className="MobileNavBarHeader">
        <Link to="/" onClick={() => setMenuOpen(false)} className="MobileLogoLink">
          <div className="MobileLogoContainer">
            {getStoreData.logo && (
              <img
                src={getStoreData.logo}
                alt="logo-img"
                className="MobileLogoImage"
              />
            )}
            <span className="MobileLogoCompany">{getStoreData.company}</span>
          </div>
        </Link>

        <div
          className="MobileMenuIcon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul className={`MobileNavBarList ${menuOpen ? 'show' : ''}`}>
        {getStoreData.menu.map((item, index) =>
          item.sections ? (
            <li key={index} className="MobileNavBarItem">
              <div
                className="MobileNavBarLinkWithIcon"
                onClick={() => handleToggleDropdown(item.name)}
              >
                <span>{item.name}</span>
                <FaPlus
                  className={`MobileMenuIcon-ChevronIcon ${
                    openDropdown === item.name ? 'MobileMenuIcon-rotate-up' : ''
                  }`}
                />
              </div>
              <ul
                className={`MobileSubMenuList ${
                  openDropdown === item.name ? 'show' : ''
                }`}
              >
                {item.sections.map((section, sectionIndex) =>
                  section.links.map((subItem, subIndex) => (
                    <li key={`${sectionIndex}-${subIndex}`} className="MobileSubMenuItem">
                      <Link
                        to={subItem.link}
                        className="MobileSubMenuLink"
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </li>
          ) : (
            <li key={index} className="MobileNavBarItem">
              <Link
                to={item.link}
                className="MobileNavBarLink"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          )
        )}

        <li className="MobileNavBarActions">
          {getStoreData.actions.map((action, index) =>
            action.type === 'button' ? (
              <button key={index} className="MobileNavBarButton">
                {action.name}
              </button>
            ) : (
              <Link
                key={index}
                to={action.link}
                className="MobileNavBarLink"
                onClick={() => setMenuOpen(false)}
              >
                {action.name}
              </Link>
            )
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavBar;



