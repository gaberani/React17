export default function App() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);
  // 컴포넌트가 생성된 이후라 하더라도 ref 객체의 current 속성이 없을 수 있다
  // 따라서, 조건부 렌더링을 하는 경우에는 컴포넌트가 생성된 이후라 하더라도 ref 객체를 사용할 때 주의해야한다.
  // input 요소가 존재하지 않을 때, ref 객체를 사용한 '텍스르토 이동' 버튼을 누르면 문제가 될 수 있는데


  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button> onClick={() => setShowText(!showText)}
        보이기/가리기
      </button>
      {/* 이 문제를 예방하기 위해, inputRef.current 속성이 존재하는지 검사한다 */}
      <button onClick={() => inputRef.current && inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
} 