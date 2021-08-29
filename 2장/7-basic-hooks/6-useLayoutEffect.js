import React, { useState, useLayoutEffect, useRef } from 'react';

export default function App() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width)
    if (width > 500) {
      setWidth(500);
    }
    // 연산이 많은 함수 추가하여 테스트
    let v = 0;
    for(let i=0; i<1000000000; i++) {
      v += i * 2 + i;
    }
  }, [width]);
  return (  
    <div>
      <div style={{ width, height: 100, backgroundColor: 'green' }}>test</div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500 이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}