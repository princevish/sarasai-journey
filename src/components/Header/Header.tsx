import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  currentStep?: number;
  totalSteps?: number;
}

const Header: React.FC<HeaderProps> = ({ currentStep = 4, totalSteps = 5 }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogo}>
          <img src="/logo.svg" alt="Saras AI Institute" />
        </div>

        <div className={styles.progressIndicator}>
          <div className={styles.stepInfo}>
            <span className={styles.stepLabel}>Step</span>
            <span className={styles.stepNumber}>{String(currentStep).padStart(2, "0")}</span>
            <span className={styles.stepTotal}>/ {String(totalSteps).padStart(2, "0")}</span>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
