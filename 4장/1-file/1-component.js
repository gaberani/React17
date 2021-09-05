// 함수의 propTypes 라는 속성을 이용해서 객체를 입력해줄 수 있는데
// 이를 통해 속성값의 타입 정보를 입력하는 것이다
MyComponent.propTypes = {
  // ...
};

export default function MyComponent({ prop1, prop2 }) {
  // ...
}

const COLUMNES = [
  { id: 1, name: 'phoneNumber', width: 200, color: 'white' },
  { id: 1, name: 'city', width: 100, color: 'grey' },
  // ...
];
const URL_PRODUCT_LIST = 'api/products';
function getTotalPrice({ price, total }) {
  // ...
}