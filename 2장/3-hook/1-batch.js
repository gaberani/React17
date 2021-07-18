import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(count + 1);
    setCount(count + 1);
  }
  console.log('render called');
  // 외부에서 처리하여 렌더링이 발생함.
  useEffect(() => {
    window.addEventListener('click', onClick);
    return () => window.addEventListener('click', onClick);
  })
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}