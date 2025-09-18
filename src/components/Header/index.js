import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Trang Chủ</Link></li>
          <li><Link to="/events">Sự Kiện</Link></li>
          <li><Link to="/news">Tin Tức</Link></li>
          <li><Link to="/features">Tính Năng</Link></li>
          <li><Link to="/guide">Hướng Dẫn</Link></li>
          <li><Link to="/community">Cộng Đồng</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
