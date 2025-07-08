'use client';

import { motion } from 'framer-motion';
import { useInView } from './useScrollFadeIn';

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView(0.3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
