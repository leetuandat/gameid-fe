import React from 'react';
import "./register.css"

function Register() {
  return (
    <div className="Register">
      {/* Header */}
      <nav className="navbar navbar-expand-lg header">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/assets/images/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">TRANG CHỦ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">NẠP TIỀN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">TUYỂN DỤNG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">LIÊN HỆ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Back Button (Desktop) */}
      <div className="d-none d-md-block">
        <a href="#" className="back-btn">
          <i className="fas fa-arrow-left"></i>
        </a>
        <div
          className="position-fixed"
          style={{
            left: '20px',
            top: 'calc(50% + 40px)',
            transform: 'translateY(-50%)',
          }}
        >
          <div className="back-text">Quay lại</div>
        </div>
      </div>

      {/* Back Button (Mobile) */}
      <div className="d-block d-md-none">
        <div className="container mt-3">
          <a href="#" className="back-btn d-inline-flex align-items-center">
            <i className="fas fa-arrow-left"></i>
            <span className="back-text">Quay lại</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-4 my-md-5">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* Registration Form */}
            <div className="form-container">
              <h2 className="form-title">ĐĂNG KÝ TÀI KHOẢN</h2>

              <form>
                {/* Username */}
                <div className="row">
                  <div className="col-6 mb-3">
                    <label className="form-label">
                      <span className="required">*</span>Tên tài khoản
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="(Độ dài từ 6-16 kí tự và không có kí tự đặc biệt)"
                    />
                  </div>
                </div>

                {/* Password Row */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      <span className="required">*</span>Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="(Mật khẩu từ 8-16 kí tự và không có kí tự đặc biệt)"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      <span className="required">*</span>Nhập lại mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="(Mật khẩu từ 8-16 kí tự và không có kí tự đặc biệt)"
                    />
                  </div>
                </div>

                {/* Phone and OTP Row */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      <span className="required">*</span>Số điện thoại
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="(Hãy nhập chính xác số điện thoại của bạn để nhận mã OTP)"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      <span className="required">*</span>Mã OTP
                    </label>
                    <div className="d-flex gap-2 position-relative align-items-center">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="(Nhập mã OTP)"
                      />
                      <button
                        type="button"
                        className="btn btn-send-otp flex-shrink-0 position-absolute"
                      >
                        Gửi mã
                      </button>
                    </div>
                  </div>
                </div>

                {/* Terms Section */}
                <div className="terms-text mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms1"
                      required
                    />
                    <label className="form-check-label" htmlFor="terms1">
                      Tôi đã đọc, đồng ý với <a href="#">Điều khoản dịch vụ</a> và{' '}
                      <a href="#">Chính sách bảo mật</a>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms2"
                      required
                    />
                    <label className="form-check-label" htmlFor="terms2">
                      Tôi đồng ý cho phép Opengame sử dụng <a href="#">Dữ liệu cá nhân</a>
                    </label>
                  </div>
                </div>

                {/* Register Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-register">
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>

            {/* Login Section */}
            <div className="footer-section p-3 text-center">
              <p className="mb-3 text-muted">
                <i>Bạn đã có tài khoản?</i>
              </p>
              <button type="button" className="btn btn-login">
                Đăng nhập ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
