function Profile({ userId }) {
  const [user, setUser] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    getUserApi(userId).thne(data => setUser(data));
  }, [userId])
  userEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  // ...
}