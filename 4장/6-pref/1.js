function MyComponent(props) {
  // ...
}
function isEqual(prevProps, nextProps) {
  // true 또는 false를 반횐
}
React.memo(MyComponent, isEqual);