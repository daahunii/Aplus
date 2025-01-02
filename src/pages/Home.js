import React, { useState } from 'react';

const Home = () => {
  const lectures = [
    {
      id: 1,
      title: 'Python 강의',
      description: 'Python 기본 강좌',
      details: 'Python은 인기 있는 프로그래밍 언어입니다. 기초부터 시작해서 다양한 프로젝트를 만들어 보세요.',
      category: 'Python',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'C 강의',
      description: 'C 언어 초급',
      details: 'C 언어는 시스템 프로그래밍의 기초입니다. 기본 문법과 구조를 확실히 배우고 응용력을 키워보세요.',
      category: 'C',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'C++ 강의',
      description: 'C++ 중급 강좌',
      details: 'C++의 객체지향 프로그래밍을 배워 중급 개발자가 되어보세요.',
      category: 'C++',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Java 강의',
      description: 'Java 기초 학습',
      details: 'Java를 배우며 객체지향 프로그래밍과 실전 프로젝트를 경험하세요.',
      category: 'Java',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [selectedLecture, setSelectedLecture] = useState(null);

  const openModal = (lecture) => {
    setSelectedLecture(lecture);
  };

  const closeModal = () => {
    setSelectedLecture(null);
  };

  return (
    <div className="container mt-5">
      {/* 캐러셀 섹션 */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://via.placeholder.com/1200x400?text=First+Slide"
              className="d-block w-100"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Python 기본 강의</h5>
              <p>Python의 기초부터 차근차근 배워보세요!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1200x400?text=Second+Slide"
              className="d-block w-100"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>C 언어 초급</h5>
              <p>C 언어를 시작하는 첫걸음!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1200x400?text=Third+Slide"
              className="d-block w-100"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Java 기초 학습</h5>
              <p>Java를 배우며 객체지향 프로그래밍 이해하기.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 강의 카드 */}
      <h2 className="text-center mb-4">수강 가능한 강의</h2>
      <div className="row">
        {lectures.map((lecture) => (
          <div key={lecture.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={lecture.image}
                className="card-img-top"
                alt={lecture.title}
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <span className="badge bg-primary mb-2">{lecture.category}</span>
                <h5 className="card-title">{lecture.title}</h5>
                <p className="card-text">{lecture.description}</p>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => openModal(lecture)}
                >
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 모달창 */}
      {selectedLecture && (
        <>
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h4>{selectedLecture.title}</h4>
              <p>{selectedLecture.details}</p>
              <button className="btn btn-secondary mt-3" onClick={closeModal}>
                닫기
              </button>
            </div>
          </div>

          {/* 강의 들으러 가기 버튼 */}
          <button className="fixed-bottom-btn">강의 들으러 가기</button>
        </>
      )}
    </div>
  );
};

export default Home;
