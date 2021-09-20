// useEffect의 개념은 간단하지만 실전에서 막히는 경우가 종종 있다
// 특히 의존성 배열을 다루기 까다롭다. 대부분은 의존성 배열을 입력하지 않아도 되지만
// 종종 필요한 경우가 있다. 의존성 배열을 잘못 관리하면 쉽게 버그로 이어지기 쉽다
function Profile({ userId }) {
  const [user, setUser] = useState();
  // useEffect의 부수효과 함수는 Profile 컴포넌트가 렌더링 될때마다 호출되기 때문에
  // 서버의 api를 호출하는 코드가 항상 실행이 된다.
  // 그래서 빈 배열([])을 입력한다면 userId가 바뀌어도 호출되지 않기에
  // 새로운 사용자 정보를 가져오기 못하기 때문에 올바른 해결책이 아니다.
  useEffect(() => {
    fetchUser(userId).then(data => setUser(data));
  }, []);

  // 따라서 userId를 의존성 배열에 추가해준다
  useEffect(() => {
    fetchUser(userId).then(data => setUser(data));
  }, [userId]);
  // ...
}