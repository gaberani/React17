function TodoList({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter(item => item.done));
  // 아래 함수에서 부모의 데이터를 자식 컴포넌트에서 변형을 주고있음
  // 이는 부모가 가진 데이터와 정합이 맞지 않아 대개 이런 상황은 버그로 이어지게 된다.
  // 따라서 상태값은 일부 컴포넌트로 한정해서 관리하는 것이 좋다.
  function onChangeName(key, name) {
    setDoneList(
      doneList.map(item => (item.key === key ? { ...item, name } : item)),
    );
  }
  // ...
}