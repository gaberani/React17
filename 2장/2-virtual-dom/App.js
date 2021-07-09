import React, { useEffect, useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [seconds, setSeconds] = useState()
  useEffect(() => {
    useState(() => {
      setTimeout(() => {
        setSeconds(v => v + 1);
      }, 1000);
    })
  });
  return (
    // key값이 이전과 달라질 경우, 리액트는 전혀 다른 요소로 판단해서
    // 그와 관련된 다른 부분을 다시 렌더링함
    <div>
      <Counter key={seconds} />
      <h1 style={{ color: seconds % 2 ? 'red' : 'blue' }}>안녕하새요</h1>
      <h2>지금까지 {seconds}초가 지났습니다.</h2>
    </div>
  )
}