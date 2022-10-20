import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-01-12T09:30:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Worcester, MA',
  },
  {
    key: 'BrithPlace',
    label: 'Place of birth',
    value: 'Anda, CHN',
  },
  {
    key: 'Languages',
    label: 'Languages',
    value: 'Mandarin, English',
  },
  {
    key: 'RLanguages',
    label: 'Programming Languages',
    value: 'Java, Python, JavaScript, C',
  },
];

export default data;
