// 비즈니스 로직이나 상태값이 포함되지 않도록 분리
// 2.js에서 컴포넌트 분리

import React from 'react';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>{`${friend.name} (${friend.age})`}</li>
      ))}
    </ul>
  );
}