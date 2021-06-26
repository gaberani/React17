import React from 'react';
import './Button.css';
// import cn from 'classname';

export default function Button({ size }) {
  if (size === 'big') {
    return <div className="Button big">큰 버튼</div>;
  } else {
    return <div className="Button small">작은 버튼</div>;
  }
}

// export default function Box({ size }) {
//   const isBig = size === 'big';
//   return (
//     <button 
//       className={cn(Style.BUtton, {
//         [Style.big]: isBig, 
//         [Style.small]: !isBig
//       })}
//     >
//         {isBig ? '큰 버튼' : '작은 버튼'}
//     </button>
//   )
// }