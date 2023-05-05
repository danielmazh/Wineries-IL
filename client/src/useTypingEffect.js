// src/useTypingEffect.js

import { useState, useEffect } from 'react';

const useTypingEffect = (text, typingSpeed) => {
  const [outputText, setOutputText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setOutputText((prevOutputText) => prevOutputText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [text, typingSpeed, index]);

  return outputText;
};

export default useTypingEffect;
