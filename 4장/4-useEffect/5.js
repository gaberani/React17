useEffect(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [userId]);

// use async & await
useEffect(() => {
  async function fetchAndSetUser() {
    const data = await fetchUser(userId);
    setUser(data);
  }
  fetchAndSetUser();
}, [userId]);