import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  // 부수 효과 함수
  useEffect(() => {
    document.title = `업데이트 획수: ${count}`;
  });
  return <button onClick={() => setCount(count+ 1 )}>increase</button>;
}