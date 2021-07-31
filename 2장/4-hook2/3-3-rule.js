let hooks = null ;

export default useHook() {
  // ...
  // 커스텀 훅을 사용한다면 순서에 맞게 차곡차곡 쌓임
  hooks.push(hookdata);
}

function process_a_component_rendering(component) {
  hooks = [];
  component();
  let hooksForThisComponent = hooks;
  hooks = null;
  // ...
}