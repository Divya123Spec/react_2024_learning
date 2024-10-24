import React, { useState } from 'react';

const SampleUnitTest = ({ onClick }) => {
  const [text, setText] = useState('Penny');

  const handleClick = () => {
    setText('Button Clicked!');
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <p> My Name is Divya</p>
      <p>Divya</p>
      <p>{text}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default SampleUnitTest;
