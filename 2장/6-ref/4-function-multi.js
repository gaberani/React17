import React, { useRef, useEffect } from 'react';

export default function App() {
  // Problem => 동적인 개수가 들어오는 BOX_LIST를 처리하기에 useRef를 쓰기 애매한 상황
  // const ref1 = useRef();

  // 지금까지는 이 ref 객체에 실제 돔의 요소나 컴포넌트의 인스턴스를 참조하는 용도로 사용했다
  // 사실 ref 객체 안에 원하는 값이면 어떤 값이든 저장할 수 있다.
  // 아래와 같이 숫자를 저장하거나 (하지만, 아래와 같이 컴포넌트가 실행될 때 current값을 수정하면 좋지 않다.)
  // boxListRef.current = 123;
  // useRef에서 초기값을 할당하여 사용할 수 있다.
  // const boxListRef = useRef(123);
  const boxListRef = useRef({} );

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100%',
        }}
      >
        {BOX_LIST.map(item => {
          <div
            key={item.id}
            ref={ref => (boxListRef.current[item.id] = ref)}
            style={{
              flex: '0 0 auto',
              width: item.width, 
              height: 100,
              backgroundColor: 'yellow',
              border: 'solid 1px red',
            }}
          >{`box_${item_id}`}</div>
        })}
      </div>
      <button onClick={() => {}}>오른쪽 끝 요소는?</button>
    </div>
  )
}

const BOX_LISt = [
  { id: 1, width: 70 },
  { id: 2, width: 100 },
  { id: 3, width: 50 },
  { id: 4, width: 60 },
  { id: 5, width: 40 },
  { id: 6, width: 90 },
  { id: 7, width: 80 },
]