import React, { useState, useEffect } from 'react';

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
    getUserApi(userId).then(data => setUser(data));
    // 이와 같이 value라는 지역변수를 추가하고 의존성 배열에도 추가해야 하기에
    // 이 부분에서 버그가 자주 일어나는데 어떻게 관리할 수 있을 지에 대해서는
    // 추후에 설명!
  }, [userId, value]);
  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

const USER1 = { name: 'mike', age: 23 };
const USER2 = { name: 'jane', age: 31 };
function getUserApi(userId) {
  return new Promise(res => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}