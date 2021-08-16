import React, { createContext, useState } from 'react';

const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

export default function App() {
  const [name, setName] = useState('mike');
  return (
    <div>
      <ThemeContext.Provider>
        <UserContext.Provider value={name}>
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div> 
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

const Profile = React.memo(function() {
  console.log(Profile)
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  const theme = useContext(ThemeContext);
  const username = useContext(UserContext);
  return (
    <p
      style={{ color: theme === 'dark' ? 'gray' : 'green' }}
    >{`${username}님 안녕하세요`}</p>
  );
}