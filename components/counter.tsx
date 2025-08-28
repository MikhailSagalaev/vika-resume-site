'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

type CounterProps = {
  to: number;
  duration?: number; // seconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export const Counter: React.FC<CounterProps> = ({
  to,
  duration = 1.2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const isInView = useInView(ref, { amount: 0.6, once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(v),
    });

    return () => controls.stop();
  }, [isInView, to, duration]);

  const formatted = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default Counter;
