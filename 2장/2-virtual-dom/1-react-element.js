const element = <a href="http://google.com">click here</a>;
// 위와 같은 jsx 문법은 바벨이 createElement를 호출하는 코드로 변환해줌
const element = React.createElement(
  'a',
  { href: 'http://google.com '},
  'click here',
);