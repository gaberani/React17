
import React, { useContext, createContext, useState } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0 });

export default function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);
  console.log('App render')
  return (
    <div>
      <UserContext.Provider value={{ username, age }}>
        <Profile />
        <button onClick={() => setCount(count + 1)}>증가</button>
      </UserContext.Provider>
    </div>
  )
}

const Profile = React.memo(function() {
  console.log('Profile render')
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  console.log('Greeting render')
  const username = useContext(UserContext);
  return <p>{`${username}님 안녕하세요`}</p>;
}