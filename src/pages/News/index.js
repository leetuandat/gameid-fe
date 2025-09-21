import React, { useState } from "react";
import "./News.css"; // Thêm CSS vào React
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function App() {
  // State để theo dõi tab đang được chọn
  const [activeTab, setActiveTab] = useState("tin-tuc");

  // Tab click handler
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Header />
      {/* Header Image */}
      <div className="header-image"></div>

      <div className="News" style={{ position: "relative" }}>
        <div className="sidebg"></div>
        <div className="container">
          <div className="main-content">
            {/* Tab Navigation */}
            <div className="nav-tabs">
              <button
                className={`nav-tab ${activeTab === "tin-tuc" ? "active" : ""}`}
                onClick={() => handleTabClick("tin-tuc")}
              >
                Tin Tức
              </button>
              <button
                className={`nav-tab ${activeTab === "su-kien" ? "active" : ""}`}
                onClick={() => handleTabClick("su-kien")}
              >
                Sự Kiện
              </button>
              <button
                className={`nav-tab ${
                  activeTab === "huong-dan" ? "active" : ""
                }`}
                onClick={() => handleTabClick("huong-dan")}
              >
                Hướng Dẫn
              </button>
            </div>

            {/* Tin Tức Tab Content */}
            {activeTab === "tin-tuc" && (
              <div id="tin-tuc" className="tab-content active">
                {/* Các news-item trong tin-tuc */}
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SK WEB]</span>
                      MỞ CỬA HÀNG ĐỒNG GIÁ THÁNG 08/2025
                    </div>
                    <div className="news-description">
                      Một trong những sự kiện lớn nhất của OP Open Beta tháng 08
                      2025, Mong quý bằng hữu bớt chút thời gian đến chia vui
                      cùng chúng tôi.
                    </div>
                  </div>
                  <div className="news-date">29/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SK WEB]</span>
                      MỞ CỬA HÀNG ĐỒNG GIÁ THÁNG 08/2025
                    </div>
                    <div className="news-description">
                      Một trong những sự kiện lớn nhất của OP Open Beta tháng 08
                      2025, Mong quý bằng hữu bớt chút thời gian đến chia vui
                      cùng chúng tôi.
                    </div>
                  </div>
                  <div className="news-date">29/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SK WEB]</span>
                      MỞ CỬA HÀNG ĐỒNG GIÁ THÁNG 08/2025
                    </div>
                    <div className="news-description">
                      Một trong những sự kiện lớn nhất của OP Open Beta tháng 08
                      2025, Mong quý bằng hữu bớt chút thời gian đến chia vui
                      cùng chúng tôi.
                    </div>
                  </div>
                  <div className="news-date">29/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SK WEB]</span>
                      MỞ CỬA HÀNG ĐỒNG GIÁ THÁNG 08/2025
                    </div>
                    <div className="news-description">
                      Một trong những sự kiện lớn nhất của OP Open Beta tháng 08
                      2025, Mong quý bằng hữu bớt chút thời gian đến chia vui
                      cùng chúng tôi.
                    </div>
                  </div>
                  <div className="news-date">29/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SK WEB]</span>
                      MỞ CỬA HÀNG ĐỒNG GIÁ THÁNG 08/2025
                    </div>
                    <div className="news-description">
                      Một trong những sự kiện lớn nhất của OP Open Beta tháng 08
                      2025, Mong quý bằng hữu bớt chút thời gian đến chia vui
                      cùng chúng tôi.
                    </div>
                  </div>
                  <div className="news-date">29/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SK WEB]</span>
                      MỞ CỬA HÀNG ĐỒNG GIÁ THÁNG 08/2025
                    </div>
                    <div className="news-description">
                      Một trong những sự kiện lớn nhất của OP Open Beta tháng 08
                      2025, Mong quý bằng hữu bớt chút thời gian đến chia vui
                      cùng chúng tôi.
                    </div>
                  </div>
                  <div className="news-date">29/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SK WEB]</span>
                      MỞ CỬA HÀNG ĐỒNG GIÁ THÁNG 08/2025
                    </div>
                    <div className="news-description">
                      Một trong những sự kiện lớn nhất của OP Open Beta tháng 08
                      2025, Mong quý bằng hữu bớt chút thời gian đến chia vui
                      cùng chúng tôi.
                    </div>
                  </div>
                  <div className="news-date">29/08</div>
                </div>
                {/* Thêm các news-item khác nếu cần */}
                <div className="load-more">
                  <button className="load-more-btn">XEM THÊM</button>
                </div>
              </div>
            )}

            {/* Sự Kiện Tab Content */}
            {activeTab === "su-kien" && (
              <div id="su-kien" className="tab-content active">
                {/* Các news-item trong su-kien */}
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SỰ KIỆN]</span>
                      Sự kiện đặc biệt cuối tuần
                    </div>
                    <div className="news-description">
                      Tham gia sự kiện đặc biệt để nhận được những phần thưởng
                      hấp dẫn trong game.
                    </div>
                  </div>
                  <div className="news-date">30/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SỰ KIỆN]</span>
                      Sự kiện đặc biệt cuối tuần
                    </div>
                    <div className="news-description">
                      Tham gia sự kiện đặc biệt để nhận được những phần thưởng
                      hấp dẫn trong game.
                    </div>
                  </div>
                  <div className="news-date">30/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SỰ KIỆN]</span>
                      Sự kiện đặc biệt cuối tuần
                    </div>
                    <div className="news-description">
                      Tham gia sự kiện đặc biệt để nhận được những phần thưởng
                      hấp dẫn trong game.
                    </div>
                  </div>
                  <div className="news-date">30/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SỰ KIỆN]</span>
                      Sự kiện đặc biệt cuối tuần
                    </div>
                    <div className="news-description">
                      Tham gia sự kiện đặc biệt để nhận được những phần thưởng
                      hấp dẫn trong game.
                    </div>
                  </div>
                  <div className="news-date">30/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SỰ KIỆN]</span>
                      Sự kiện đặc biệt cuối tuần
                    </div>
                    <div className="news-description">
                      Tham gia sự kiện đặc biệt để nhận được những phần thưởng
                      hấp dẫn trong game.
                    </div>
                  </div>
                  <div className="news-date">30/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SỰ KIỆN]</span>
                      Sự kiện đặc biệt cuối tuần
                    </div>
                    <div className="news-description">
                      Tham gia sự kiện đặc biệt để nhận được những phần thưởng
                      hấp dẫn trong game.
                    </div>
                  </div>
                  <div className="news-date">30/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[SỰ KIỆN]</span>
                      Sự kiện đặc biệt cuối tuần
                    </div>
                    <div className="news-description">
                      Tham gia sự kiện đặc biệt để nhận được những phần thưởng
                      hấp dẫn trong game.
                    </div>
                  </div>
                  <div className="news-date">30/08</div>
                </div>
                <div className="load-more">
                  <button className="load-more-btn">XEM THÊM</button>
                </div>
              </div>
            )}

            {/* Hướng Dẫn Tab Content */}
            {activeTab === "huong-dan" && (
              <div id="huong-dan" className="tab-content active">
                {/* Các news-item trong huong-dan */}
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[HƯỚNG DẪN]</span>
                      Hướng dẫn cơ bản cho người mới
                    </div>
                    <div className="news-description">
                      Tìm hiểu các bước cơ bản để bắt đầu cuộc phiêu lưu trong
                      thế giới One Piece.
                    </div>
                  </div>
                  <div className="news-date">28/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[HƯỚNG DẪN]</span>
                      Hướng dẫn cơ bản cho người mới
                    </div>
                    <div className="news-description">
                      Tìm hiểu các bước cơ bản để bắt đầu cuộc phiêu lưu trong
                      thế giới One Piece.
                    </div>
                  </div>
                  <div className="news-date">28/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[HƯỚNG DẪN]</span>
                      Hướng dẫn cơ bản cho người mới
                    </div>
                    <div className="news-description">
                      Tìm hiểu các bước cơ bản để bắt đầu cuộc phiêu lưu trong
                      thế giới One Piece.
                    </div>
                  </div>
                  <div className="news-date">28/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[HƯỚNG DẪN]</span>
                      Hướng dẫn cơ bản cho người mới
                    </div>
                    <div className="news-description">
                      Tìm hiểu các bước cơ bản để bắt đầu cuộc phiêu lưu trong
                      thế giới One Piece.
                    </div>
                  </div>
                  <div className="news-date">28/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[HƯỚNG DẪN]</span>
                      Hướng dẫn cơ bản cho người mới
                    </div>
                    <div className="news-description">
                      Tìm hiểu các bước cơ bản để bắt đầu cuộc phiêu lưu trong
                      thế giới One Piece.
                    </div>
                  </div>
                  <div className="news-date">28/08</div>
                </div>
                <div className="news-item">
                  <div className="news-content">
                    <div className="news-title">
                      <span className="tag">[HƯỚNG DẪN]</span>
                      Hướng dẫn cơ bản cho người mới
                    </div>
                    <div className="news-description">
                      Tìm hiểu các bước cơ bản để bắt đầu cuộc phiêu lưu trong
                      thế giới One Piece.
                    </div>
                  </div>
                  <div className="news-date">28/08</div>
                </div>
                <div className="load-more">
                  <button className="load-more-btn">XEM THÊM</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
