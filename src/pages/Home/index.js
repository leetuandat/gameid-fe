import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // nếu bạn có CSS cho các class đã dùng'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// src/index.js (hoặc main.jsx)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // bắt buộc để tabs hoạt động
import HomeCarousel from "../../components/HomeCarousel";

// Nếu ảnh nằm trong src/assets/images:

const Home = () => {
  const pay2 = "/assets/images/pay2.png";
  const iosDown2 = "/assets/images/IOSdown2.png";
  const androidDown2 = "/assets/images/Androiddown2.png";
  const giftcode = "/assets/images/giftcode.png";

  const legend = "/assets/images/legned.png";
  const iosDown1 = "/assets/images/IOSdown1.png";
  const androidDown1 = "/assets/images/Androiddown1.png";
  const webDown = "/assets/images/Webdown.png";
  const pay1 = "/assets/images/pay1.png";

  const btn1 = "/assets/images/btn1.png";
  const btn2 = "/assets/images/btn2.png";
  const btn3 = "/assets/images/btn3.png";
  const btn4 = "/assets/images/btn4.png";

  return (
    <>
      <Header />
      {/* Section One */}
      <div className="home-section-one">
        {/* Hero Section */}
        <section className="hero">
          <div className="inner-content">
            {/* Pay Button */}
            <div className="pay-button">
              <Link to="/nap-the" className="btn">
                <img src={pay2} alt="Nạp thẻ" />
              </Link>
            </div>

            {/* Download Buttons */}
            <div className="download-buttons">
              <Link to="/tai-ios" className="btn">
                <img src={iosDown2} alt="Tải iOS" />
              </Link>
              <Link to="/tai-android" className="btn">
                <img src={androidDown2} alt="Tải Android" />
              </Link>
            </div>

            {/* Giftcode Button */}
            <div className="giftcode-button">
              <Link to="/giftcode" className="btn giftcode-btn">
                <img src={giftcode} alt="Nhận code" />
              </Link>
            </div>
          </div>
        </section>

        {/* Side content (Right sidebar) */}
        <div className="side-content">
          <div className="side-item">
            <img src={legend} alt="Huyền Thoại" />
          </div>

          <div className="side-buttons">
            <Link to="/tai-ios" className="btn">
              <img src={iosDown1} alt="Tải iOS" />
            </Link>
            <Link to="/tai-android" className="btn">
              <img src={androidDown1} alt="Tải Android" />
            </Link>
            <Link to="/tai-pc" className="btn">
              <img src={webDown} alt="Tải PC" />
            </Link>
            <Link to="/nap-the" className="btn">
              <img src={pay1} alt="Nạp thẻ" />
            </Link>
          </div>
        </div>
      </div>
      {/* End Section One */}

      {/* Section Two */}
      <div className="home-section-two">
        <div className="container mt-5">
          <div className="row">
            {/* Left Section (Image Placeholder) */}
            <div className="col-md-6">
              <div className="image-placeholder" />
            </div>

            {/* Right Section (Tabs and Content) */}
            <div className="col-md-6">
              {/* Tab navigation - dùng button để Bootstrap tabs hoạt động */}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="news-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#news"
                    type="button"
                    role="tab"
                    aria-controls="news"
                    aria-selected="true"
                  >
                    Tin Tức
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="events-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#events"
                    type="button"
                    role="tab"
                    aria-controls="events"
                    aria-selected="false"
                  >
                    Sự Kiện
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="guide-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#guide"
                    type="button"
                    role="tab"
                    aria-controls="guide"
                    aria-selected="false"
                  >
                    Hướng Dẫn
                  </button>
                </li>
              </ul>

              {/* Tab content */}
              <div className="tab-content mt-3" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="news"
                  role="tabpanel"
                  aria-labelledby="news-tab"
                >
                  <ul>
                    <li>
                      <Link to="/tin-tuc/1">
                        [SK Web]: Mở Cửa Hàng Đồng Giá Tháng 08/2025
                      </Link>
                      <span className="date">08/2025</span>
                    </li>
                    <li>
                      <Link to="/tin-tuc/2">
                        [SK Web]: Mở Cửa Hàng Đồng Giá Tháng 08/2025
                      </Link>
                      <span className="date">08/2025</span>
                    </li>
                    <li>
                      <Link to="/tin-tuc/3">
                        [SK Web]: Mở Cửa Hàng Đồng Giá Tháng 08/2025
                      </Link>
                      <span className="date">08/2025</span>
                    </li>
                  </ul>
                </div>

                <div
                  className="tab-pane fade"
                  id="events"
                  role="tabpanel"
                  aria-labelledby="events-tab"
                >
                  <ul>
                    <li>
                      <Link to="/su-kien/1">
                        [SK Web]: Mở Cửa Hàng Đồng Giá Tháng 08/2025
                      </Link>
                      <span className="date">08/2025</span>
                    </li>
                    <li>
                      <Link to="/su-kien/2">
                        [SK Web]: Mở Cửa Hàng Đồng Giá Tháng 08/2025
                      </Link>
                      <span className="date">08/2025</span>
                    </li>
                  </ul>
                </div>

                <div
                  className="tab-pane fade"
                  id="guide"
                  role="tabpanel"
                  aria-labelledby="guide-tab"
                >
                  <ul>
                    <li>
                      <Link to="/huong-dan/1">
                        [SK Web]: Mở Cửa Hàng Đồng Giá Tháng 08/2025
                      </Link>
                      <span className="date">08/2025</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /tab-content */}
            </div>
          </div>
        </div>
      </div>
      {/* End Section Two */}

      {/* Section Three */}
      <div className="container mt-5" style={{ marginBottom: 60 }}>
        <div className="row justify-content-sm-between align-items-lg-end equal-height-row">
          {/* Card 1: Đặc quyền VIP */}
          <div className="col-12 col-sm-6 col-md-3 mb-4 equal-height-col">
            <div className="card1">
              <img src={btn1} className="card-img-top" alt="Đặc quyền VIP" />
            </div>
          </div>

          {/* Card 2: Nhận quà Tri Ân */}
          <div className="col-12 col-sm-6 col-md-3 mb-4 equal-height-col">
            <div className="card1">
              <img src={btn2} className="card-img-top" alt="Nhận quà Tri Ân" />
            </div>
          </div>

          {/* Card 3: Hướng dẫn Giftcode */}
          <div className="col-12 col-sm-6 col-md-3 mb-4 equal-height-col">
            <div className="card1">
              <img
                src={btn3}
                className="card-img-top"
                alt="Hướng dẫn Giftcode"
              />
            </div>
          </div>

          {/* Card 4: Hướng dẫn Nạp Thẻ */}
          <div className="col-12 col-sm-6 col-md-3 mb-4 equal-height-col">
            <div className="card1">
              <img
                src={btn4}
                className="card-img-top"
                alt="Hướng dẫn Nạp Thẻ"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Section Three */}
      <HomeCarousel />
      <Footer />
    </>
  );
};

export default Home;
