import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

export default function App() {
  return (
    <React.Fragment>
      <p>안녕</p>
      <p>하세요</p>
      {ReactDOM.createPortal(
        <div>
          <p>안녕하세요</p>
          <p>실전 리액트 프로그래밍 입니다.</p>
        </div>,
        document.getElementById('something'),
      )}
      {/* null이나 boolean 값은 렌더링 되지 않는다! */}
      {null}
      {false}
      {true}
    </React.Fragment>
    // <> = 축약형으로 React.Fragment와 같다
    //   <p>안녕</p>
    //   <p>하세요</p>
    // <>
  );
  // [<p key={1}>안녕</p>, <p key={2}>하세요</p>];
}