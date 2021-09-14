// 비즈니스 로직이나 상태값이 포함되지 않도록 분리
import React from 'react';

export default function NumberSelect({ value, options, label, onChange }) {
  function onChangeOption(e) {
    const value = Number(e.currentTarget.value);
    onChange(value);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <div>
        <select onChange={onChangeOption} value={value}>
          {AGE_LIMIT_OPTIONS.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {label}
      </div>
    </div>
  );
}