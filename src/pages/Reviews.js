import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      user: '김철수',
      rating: 5,
      comment: '강의가 정말 유익했어요! 강사님 설명이 귀에 쏙쏙 들어옵니다.',
    },
    {
      id: 2,
      user: '박영희',
      rating: 4,
      comment: '기초를 탄탄하게 잡을 수 있었습니다. 추천합니다.',
    },
    {
      id: 3,
      user: '이민호',
      rating: 5,
      comment: '실습 예제도 많고 이해하기 쉽습니다. 최고예요!',
    },
    {
      id: 4,
      user: '최수빈',
      rating: 4,
      comment: '좋은 강의입니다! 다만 심화 과정도 추가되면 좋겠어요.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">수강 후기</h2>
      <div className="row">
        {reviews.map((review) => (
          <div key={review.id} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{review.user}</h5>
                <p className="card-text">{'⭐'.repeat(review.rating)}</p>
                <p className="card-text">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
