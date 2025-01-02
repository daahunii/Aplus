// import React, { useState } from 'react';

// const LoginModal = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(true)}>로그인</button>
//       {show && (
//         <div style={styles.overlay}>
//           <div style={styles.modal}>
//             <h2>로그인</h2>
//             <input type="email" placeholder="아이디(이메일)" />
//             <input type="password" placeholder="비밀번호" />
//             <button>로그인</button>
//             <div>
//               <a href="#">아이디 찾기</a> | <a href="#">비밀번호 찾기</a> | <a href="#">회원가입</a>
//             </div>
//             <button onClick={() => setShow(false)}>닫기</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' },
//   modal: { margin: '15% auto', padding: '20px', background: '#fff', width: '300px', textAlign: 'center' },
// };

// export default LoginModal;
