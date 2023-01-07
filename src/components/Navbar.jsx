import React from "react";
import Logo from "../assets/logo/Group.svg";
import photo from "../assets/images/image.png";
import bell from "../assets/icons/bell.svg";
import { useUserContext } from "../context/UserContext";
const Navbar = () => {
  const { showSidebar, setShowSidebar } = useUserContext();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <img className="logo" src={Logo} alt="lendsqr-logo" />
          <div className="search-bar">
            <input type="text" placeholder="Search for anything" />
            <span className="material-symbols-outlined search-icon">
              search
            </span>
          </div>
          <div className="navbar-actions">
            <a href="/#">Docs</a>
            <div className="logged-in-user">
              <img src={bell} alt="notifications" />
              <img src={photo} className="user-image" alt="user-img" />
              <p>Adedeji</p>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </div>
        </div>
        <div className="navbar-mobile">
          <img className="logo" src={Logo} alt="lendsqr-logo" />
          <span
            className="material-symbols-outlined"
            onClick={() => toggleSidebar()}
          >
            menu
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
