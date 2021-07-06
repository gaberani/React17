import React from 'react';

export default function Tilte({ title }) {
  console.log('Title render')
  return <p>{ title }</p>;
}

export default React.memo(Title);
