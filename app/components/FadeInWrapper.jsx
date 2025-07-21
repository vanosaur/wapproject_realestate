'use client';

import { useEffect, useState } from 'react';

export default function FadeInWrapper({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  );
}
