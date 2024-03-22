"use client";

import React, { useState } from "react";
import Button from "./Button/index";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav/index";

const variants = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: "0.75", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: "0.75", delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Index;
