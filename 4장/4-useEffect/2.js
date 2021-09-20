function Profile({ userId }) {
  const [user, setUser] = useState();
  const [needDetail, setNeedDetail] = useState(false);

  // 만약 함수에 매개변수가 추가되어 상태값으로 관리한다면
  // 의존성 배열에 입력하는 것을 잊지않도록 조심
  useEffect(() => {
    fetchUser(userId, needDetail).then(data => setUser(data));
  }, [userId, needDetail]);
  // ...
}