import useOnMounted from './useOnMounted';

function Profile({ userId }) {
  const [user, setUser] = useState();
  useOnMounted(() => fetchUser(userId).then(data => setUser(data)));
	
  // userId가 변경되지 않는 것을 확신할 때는
  // 아래처럼 빈 배열로 입력하기 보다는 명시적으로 hook을 만들어서
  // 시점을 조절해주는 훅을 만들어서 사용하는 것이 낫다
  // useEffect(() => {
  //   fetchUser(userId, needDetail).then(data => setUser(data));
  // }, []);
  // ...
  console.log(user);
  return null;
}
function fetchUser() {}