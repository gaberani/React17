import React from 'react';
import Counter from './Counter';

export default function App() {
  return (
    <React.Fragment>
      <p>안녕</p>
      <p>하세요</p>
    </React.Fragment>
    // <> = 축약형으로 React.Fragment와 같다
    //   <p>안녕</p>
    //   <p>하세요</p>
    // <>
  );
  // [<p key={1}>안녕</p>, <p key={2}>하세요</p>];
}