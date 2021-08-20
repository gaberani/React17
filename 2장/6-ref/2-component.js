import React, { useRef, useEffect } from 'react';

export default function App() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <InputAndSave inputRef={inputRef} />
      <Button ref={buttonRef}>저장</Button>
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

// ref와 다른 이름인 속성으로 내려서 사용할 경우
function InputAndSave({ inputRef, buttonRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button ref="buttonRef">저장</button>
    </div>
  );
}

// 기초적인 컴포넌트에 ref라는 이름으로 활용하고 싶은 경우
const Button = React.forwardRef(function ({ onClick }, ref) {
  return (
    <button onClick={onClick} ref={ref}>
      저장
    </button>
  );
})