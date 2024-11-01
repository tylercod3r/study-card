"use client";

// import { motion, AnimatePresence } from "framer-motion";

const AppFooter = () => {
  return (
    <footer className="text-center bg-background-color lg:text-left">
      {/* <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 1 }}
          className="p-4 text-center"
        > */}
      <p className="text-slate-600 credits">
        Copyright &copy; 2024 tylercoder.com
      </p>
      {/* </motion.div>
      </AnimatePresence> */}
    </footer>
  );
};

export default AppFooter;
