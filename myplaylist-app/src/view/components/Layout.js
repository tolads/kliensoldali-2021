import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../assets/logo.png";

const Layout = (props) => {
  return (
    <div className="ui container">
      <nav className="ui secondary menu">
        <img src={logo} alt="logo" />
        <NavLink exact className="item" to="/">
          <i className="home icon"></i> Home
        </NavLink>
        <NavLink className="item" to="/playlists">
          <i className="headphones icon"></i> My Playlists
        </NavLink>
        <a className="item" href="tracks.html">
          <i className="music icon"></i> Tracks
        </a>
        <NavLink className="item" to="/search">
          <i className="search icon"></i> Search
        </NavLink>
        <div className="ui right dropdown item">
          John Doe
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">
              <i className="user icon"></i> Profile
            </div>
            <div className="item">
              <i className="settings icon"></i> Settings
            </div>
            <div className="item">
              <i className="sign out icon"></i>Log out
            </div>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
