// 6.js
// 문제 상황
function MyComponent({ onClick }) {
  useEffect(() => {
    window.addEventListener('click', () => {
      onClick();
      // ...
    });
  }, [onClick]);
  // ...
}