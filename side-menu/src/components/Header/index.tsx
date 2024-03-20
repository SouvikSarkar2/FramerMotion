"use client";

import React, { useState } from "react";
import Button from "./Button/index";
import styles from "./style.module.scss";
const Index = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header}>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Index;
