import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({ name: '', age: 0 });
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      {/* 상태값 변경 함수인 setState을 호출 할 때는 전체 객체를 새로 입력해줘야함 */}
      {/* 그래서 ...state로 기존 값을 입력해준 뒤, name만 다시 선언 */}
      {/* 여러 개의 상태 값을 관리할 때는 useState 보다는 useReducer가 더 적합하다 */}
      <input
        type="text"
        value={state.name}
        onChange={e => setState({ ...state, name: e.target.value })}
      />
      <input
        type="number"
        value={state.age}
        onChange={e => setState({ ...state, age: e.target.value })}
      />
    </div>
  )
}