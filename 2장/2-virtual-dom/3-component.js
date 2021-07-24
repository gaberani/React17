function Title({ title, color }) {
  return <p style={{ color }}>{title}</p>;
}
const element = <Title title="안녕하세요" color="blue" />;
console.log(element);

// component인 element를 출력한 결과는 아래와 같다
const consoleLogResult = {
  type: Title, // 컴포넌트 함수가 타입에 적혀있음
  props: { title: '안녕하세요', color: 'blue' },
  // ...
};