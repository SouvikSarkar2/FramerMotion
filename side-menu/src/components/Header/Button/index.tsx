import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const index = ({ isActive, setIsActive }) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <p>Menu</p>
        </div>
        <div className={styles.el}>
          <p>Close</p>
        </div>
      </motion.div>
    </div>
  );
};

export default index;
