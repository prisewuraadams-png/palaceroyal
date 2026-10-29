
"use client";

import { motion } from "framer-motion";

export default function FadeUp({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.1,
        margin: "0px 0px -50px 0px",
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
