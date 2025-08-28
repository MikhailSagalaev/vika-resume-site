'use client';

import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type RevealProps = {
  delay?: number;
  className?: string;
};

export const Reveal: React.FC<PropsWithChildren<RevealProps>> = ({
  children,
  delay = 0,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
