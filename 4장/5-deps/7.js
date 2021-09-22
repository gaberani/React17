// 만약 이를 해결하는 마땅한 방법이 떠오르지 않는다면
// useRef 훅이 손쉬운 해결책이 될 수 있다
function MyComponent({ onClick }) {
  const onClickRef = useRef();
  // 렌더링이 될 때마다 ref 객체에 onClick 함수를 넣어주는 것
  useEffect(() => {
    onClickRef.current = onClick;
  })
  useEffect(() => {
    // 그리고 원래 사용하려던 곳에서 useRef 훅을 이용해 호출해준다
    // ref 객체는 의존성 배열에 추가할 필요가 없다
    // 다만 의존성 배열을 제거하기 위해 너무 애쓰게 된다
    window.addEventListener('click', () => {
      onClickRef.current();
      // ...
    });
    // ...
  });
  // ...
}