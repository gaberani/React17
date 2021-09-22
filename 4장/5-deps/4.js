function Timer({ initialTotalSeconds }) {
  const [hour, setHour] = useState(Math.floor(initialTotalSeconds / 3600));
  const [minute, setMinute] = useState(
    Math.floor((initialTotalSeconds % 3600) / 60),
  );
  const [second, setSecond] = useState(initialTotalSeconds % 60);
  useEffect(() => {
		// 해당 코드에선 setInterval을 사용한 게 무색하게도 1초마다 clearInterval을 호출하고
    // 다시 setInterval을 호출하게 된다. second가 매초 마다 업데이트 되기 때문
    const id = setInterval(() => {
      if (second) {
        setSecond(second + 1);
      } else if (minute) {
        setSecond(second - 1);
      } else if (hour) {
        setHour(hour - 1);
        setMinute(59);
        setSecond(59);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [hour, minute, second]);
  // ...
}