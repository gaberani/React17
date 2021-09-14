// 감싸는 container로 작성
import React, { useState } from 'react';
import { getNextFriend } from './data';
import FriendList from './2-1-FriendList';
import NumberSelect from './2-2-NumberSelect';

export default function App() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

  const friendWithAgeLimit = friends.filter(item => item.age <= ageLimit);
  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        label="세 이하만 보기"
        onChange={setAgeLimit}
      />
      <FriendList friends={friendWithAgeLimit} />
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];