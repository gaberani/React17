import React, { useContext, createContext } from 'react';

function Greeting() {
  const setUser = useContext(SetUserContext);
  const { username, hellocount } = useContext(UserContext);
  return (
    <React.Fragment>
      <p>{`${username}님 안녕하세요`}</p>
      <p>{`인사 횟수 : ${hellocount}`}</p>
      <button onClick={() => setUser({ username, hellocount: hellocount + 1 })}>
        인사하기
      </button>
    </React.Fragment>
  )
}