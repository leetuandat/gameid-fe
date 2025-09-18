import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* top bar */}
      <div className="footer-top">
        <nav className="footer-nav">
          <a href="/">Trang chủ</a>
          <a href="#">Fanpage</a>
          <a href="#">Cộng đồng</a>
          <a href="#">Hỗ Trợ</a>
          <a href="#">Cài đặt</a>
          <a href="#">Điều khoản</a>
        </nav>
      </div>

      {/* bottom info */}
      <div className="footer-bottom">
        <div className="footer-text">
          <p>Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe</p>
          <p>Công ty cổ phần trực tuyến GOSU</p>
          <p>Địa chỉ: Tầng 3, số 20 Võ Chí Công, Phường Nghĩa Đô, Quận Cầu Giấy, Hà Nội, Việt Nam</p>
          <p>Điện thoại: (+84) 24 6686 0058</p>
          <p>Người chịu trách nhiệm nội dung: Ông Trần Trọng Kiên</p>
          <p>Hotline: CSKH 19003344</p>
          <p>Thời gian: 8:00–22:00 các ngày (GMT+7)</p>
        </div>
      </div>
    </footer>
  );
}
