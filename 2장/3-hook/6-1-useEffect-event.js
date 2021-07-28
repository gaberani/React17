import React, { useState, useEffect } from 'react;'

export default function WidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    // 부수 효과 함수에서 새로운 함수를 반환
    // 이럴 경우 다음 부수 효과 함수가 호출되기 직전에 호출된다.
    // 또는 컴포넌트가 사라지기 전(unmount)에 마지막으로 호출된다.
    return () => {
      window.removeEventListener('resize, onResize');
    }
    // 그래서 의존성 배열에 빈 배열로 반환해줄 경우
    // 컴포넌트가 생성될 때에만 부수 효과 함수( =useEffect )가 호출되고
    // 컴포넌트가 사라질 때에만 반환한 함수( =removeEventListener )가 호출될 것이다
  }, []);
  return <div>{`width is ${width}`}</div>;
}