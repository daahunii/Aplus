import React, { useState } from 'react';
import logo from '../assets/Aplus_logo2.png'; // 로고 이미지 경로

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* 네비게이션 위 여백 */}
      <div className="navbar-margin"></div>

      {/* 네비게이션 바 */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* 로고 이미지 */}
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Aplus 로고"
              style={{ height: '40px', marginLeft: '10px' }}
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/community">커뮤니티</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reviews">후기</a>
            </li>
          </ul>
          {/* 로그인 버튼 */}
          <button className="btn btn-primary" onClick={handleLoginClick}>
            로그인
          </button>
        </div>
      </nav>

      {/* 로그인 모달 */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h5>로그인</h5>
            <input type="email" placeholder="아이디(이메일)" className="form-control mb-2" />
            <input type="password" placeholder="비밀번호" className="form-control mb-3" />
            <button className="btn btn-primary w-100">로그인</button>
            <button
              className="btn btn-secondary mt-2 w-100"
              onClick={() => setShowModal(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
