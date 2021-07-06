import React from 'react';

// function Tilte(props) {
//   props.title = 'asdf';
// }
// read only 인 props 값을 바꿀 수 없다! => 에러 발생
function Tilte({ title }) {
  console.log('Title render')
  return <p>{ title }</p>;
}

export default React.memo(Title);
