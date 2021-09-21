function MyComponent() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  // 부수효과 함수 안에서 두 개의 상태값을 사용
  useEffect(() => {
    const id = setInterval(() => console.log(value1, value2), 1000);
    return () => clearInterval(id);
    // 의존성 배열에는 하나의 상태값을 넣음
  }, [value1]);
  return (
    <div>
      <button onClick={() => setValue1(value1 + 1)}>value1 증가</button>
      <button onClick={() => setValue2(value2 + 1)}>value2 증가</button>
    </div>
  )
}