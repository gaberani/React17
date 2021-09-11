// 만약 0원이거나 비어있는 문자열('')이어도 표현하고 싶다면
// && 연산자를 아래와 같이 앞의 항을 != null을 붙여 렌더링하는 것을 추천
// 만약 cash가 null이나 undefined가 될 수가 없다면
// 조건부 렌더링을 할 필요가 없다
<div>
  {cash != null && <p>{cash}원 보유 중</p>}
  {memo != null && <p>{200 - memo.length}자 입력 가능</p>}
</div>