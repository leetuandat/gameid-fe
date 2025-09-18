import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './home.css';  // Bạn có thể thêm CSS riêng cho trang này nếu cần

// Các phần nội dung (Hero, Banner, Features) có thể được viết trực tiếp tại đây.
const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Game Huyền Thoại</h1>
          <p>Khám phá thế giới phiêu lưu tuyệt vời ngay hôm nay!</p>
          <div className="hero-buttons">
            <button className="btn download-btn">Nạp Thẻ</button>
            <button className="btn code-btn">Nhận Code</button>
          </div>
        </div>
      </section>
      
      <section className="banner">
        <div className="banner-item">
          <img src={require('../../assets/images/bgcontent1.png')} alt="VIP" />
          <p>Đặc Quyền VIP</p>
        </div>

      </section>

      
      <Footer />
    </div>
  );
};

export default Home;
