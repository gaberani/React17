// undefined 검사 코드
{/* <div>{student && students.map(...)}</div> */}
// 되도록 undefined가 가능한 변수는 앞에 검사하는 코드가 필요하기에
// 빈 배열을 초기값으로 할당하여 하나의 코드로 가능하도록 하면 좋다
<div>{students.map(/* */)}</div>
