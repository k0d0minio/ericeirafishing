"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function LocaleTemplate({ children }: Props) {
  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
