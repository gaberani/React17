function Parent({ user }) {
  return (
    <div>
      <p>Parent</p>
      {/* <Child user={user} /> */}
      {/* 부모 컴포넌트에서 작성할 수도 있다 */}
      {/* 이 때 user 상태에 따라 언마운트와 마운트를 반복할 수 있기에 주의한다 */}
      {user && <Child user={user} />}
    </div>
  );
}

function Child({ user }) {
  const [v, setV] = useState(0);
  // 자식 코드에서 user의 존재 여부를 판별하여 렌더링할 수도 있지만
  // if (user) {
  //   return null;
  // }
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
    </div>
  )
}