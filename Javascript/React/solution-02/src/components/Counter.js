import React, { useState } from 'react';

export default function Counter(props) {
  const [characterCount, setCharacterCount] = useState(0);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setCharacterCount(e.target.value.length)}
      />
      <p>Total Number of Characters: {characterCount}</p>
    </div>
  )
}
