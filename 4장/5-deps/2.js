function myComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
		// count 변수를 1씩 증가시키기 위해 해당 변수가 필요핟
      setCount(count + 1);
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [count]);
  // ...
}