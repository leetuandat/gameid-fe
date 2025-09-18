import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Trang chủ</a>
        <a href="#">Cộng đồng</a>
        <a href="#">Hỗ trợ</a>
        <a href="#">Liên hệ</a>
      </div>
      <div className="footer-contact">
        <p>Địa chỉ: Tầng 3, 50 Hồ Tùng Mậu, Hà Nội, Việt Nam</p>
        <p>Điện thoại: 123 456 789</p>
        <p>Email: contact@game.com</p>
      </div>
    </footer>
  );
};

export default Footer;
