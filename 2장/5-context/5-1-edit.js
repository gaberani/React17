import React, { useContext, createContext, useState } from 'react';

const UserContext = createContext({ username: 'unknown', hellocount: 0 });
const SetUserContext = createContext(() => {});

// 4에선 하위 컴포넌트로 데이터를 내려서 표현하는 것을 작성했다
// 만약 하위 컴포넌트에서 데이터를 수정하고 싶다면 어떻게 사용할까?

export default function App() {
  const [user, setUser] = useState({ username: 'mike', hellocount: 0 });
  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  )
}
