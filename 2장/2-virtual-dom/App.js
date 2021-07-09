import React, { useEffect, useState } from 'react';

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
    <div>
      <h1 style={{ color: seconds % 2 ? 'red' : 'blue' }}>안녕하새요</h1>
      <h2>지금까지 {seconds}초가 지났습니다.</h2>
    </div>
  )
}