const elementTree = {
  type: 'div',
  props: {
    children: [
      // 최종 리액트 요소 트리를 만들기 위해 치환되는
      // Todo, Title과 같은 컴포넌트의 리액트 요소도
      // 메모리에 저장되서 렌더 단계의 효율을 높이는데 사용됨
      // 버튼 클릭해서 우선순위 부분 렌더링이 바뀌는 경우
      // -> 10-update와 같이 렌더링
      {
        type: 'p',
        props: {
          style: { color: 'blue' },
          children: '리액트 공부하기',
        },
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