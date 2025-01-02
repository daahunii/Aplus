import React from 'react';

const Community = () => {
  const posts = [
    { id: 1, title: 'React 초보자를 위한 팁!', author: '홍길동', date: '2024-06-01' },
    { id: 2, title: 'Python 기본 문법 정리', author: '이몽룡', date: '2024-06-05' },
    { id: 3, title: 'C 언어로 문제 해결하기', author: '성춘향', date: '2024-06-10' },
    { id: 4, title: 'Java와 객체지향 프로그래밍', author: '임꺽정', date: '2024-06-12' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">커뮤니티 게시판</h2>
      <div className="list-group">
        {posts.map((post) => (
          <a
            href="/desired-link"
            key={post.id}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            <div>
              <h5 className="mb-1">{post.title}</h5>
              <small>작성자: {post.author}</small>
            </div>
            <small>{post.date}</small>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Community;
