function myComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
      // 상태값 변경 함수의 매개변수로 이전 상태값이 들어오기 때문에 이것으로 바꾼다
      setCount(prev => prev + 1);
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
    // 위처럼 처리하여, 의존성 배열로 빈 배열을 입력할 수 있게됨
  });
  // ...
}