import { motion } from "framer-motion";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starting state
      animate={{ opacity: 4, y: 2 }} // Animate to
      transition={{ duration: 2 }} // Animation speed
    >
      <h1>Hello, Framer Motion 👋</h1>
    </motion.div>
  );
}
