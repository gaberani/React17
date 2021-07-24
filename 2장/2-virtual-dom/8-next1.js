const elementTree = {
  type: 'div',
  props: {
    children: [
      // 리액트 요소 트리가 실제 돔으로 만들어지기 위해서는
      // 모든 리액트 요소의 타입 속성값이 문자열이어야 한다.
      // -> 따라서 실제론 9-next2.js과 같이 렌더링된다.
      {
        type: Title,
        props: { title: '리액트 공부하기'},
        // ...
      },
      {
        type: 'p',
        props: { children: '실전 리액트 프로그래밍을 공부한다'},
        // ...
      },
      {
        type: 'p',
        props: { title: '리액트 공부하기'},
        // ...
      },
      {
        type: 'button',
        props: {
          onClick: function() {
            /* Todo 컴포넌트의 onClick 함수 */
          },
          children: '우선순위 변경',
        },
        // ...
      },
    ],
  },
  // ...
};