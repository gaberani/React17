import React, { useState, useEffect } from 'react'

export default function WidthPrinter() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // 초기에 한 번만 실행되면 되므로 의존성 배열에 빈 배열 넣어줌!
  }, []);
  return mounted;
}

/*
현업에서 사용하는 예시 
1. 로그인이 필요한 페이지에 로그인되지 않은 사용자가 접속할 때 얼럿을 띄워준다던가 로그인 페이지로 보내주는 훅을 사용함
2. 또는 어떤 페이지에서 작성한 내용이 있을 때 저장하지 않고 페이지를 벗어나려고 하면 얼럿 띄워주는 훅
3. useEffect를 실행하는데 로그인 유저인 경우에만 실행하고 싶을 때
4. 로컬스토리지나 쿠키 사용하는것 도 훅을 이용해서
*/