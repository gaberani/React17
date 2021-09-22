function MyComponent({ onClick }) {
  // useRef를 그냥 바로 쓰면 되지 않나 싶을 수 있지만
  // 이후 있을 리액트 버전에서 concurrent모드가 도입되면
  // 컴포넌트 함수가 실행 됐다고 하더라도 중간에 렌더링이 취소될 수 있다
  // 그러면 렌더링은 취소됐는데 ref 객체에는 잘못된 값이 저장될 수 있으므로
  // 되도록 7.js 버전으로 작성하는 것이 좋다
  const onClickRef = useRef();
  onClickRef.current = onClick;
}