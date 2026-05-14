import React, { useMemo } from "react";
import logo from "@/assets/images/logo.svg";
import styles from "./Header.module.css";

interface HeaderProps {
  currentStep?: number;
  totalSteps?: number;
}

const Header: React.FC<HeaderProps> = React.memo(({ currentStep = 4, totalSteps = 5 }) => {
  const progressPercentage = useMemo(() => {
    return Math.min(Math.max((currentStep / totalSteps) * 100, 0), 100);
  }, [currentStep, totalSteps]);

  const formattedCurrent = String(currentStep).padStart(2, "0");
  const formattedTotal = String(totalSteps).padStart(2, "0");

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogo}>
          <img src={logo} alt="Saras AI Institute" loading="lazy" decoding="async" />
        </div>

        <div className={styles.progressIndicator}>
          <div className={styles.stepInfo} aria-live="polite">
            <span className={styles.stepLabel}>Step</span>
            <span className={styles.stepNumber}>{formattedCurrent}</span>
            <span className={styles.stepTotal}>/ {formattedTotal}</span>
          </div>
          <div 
            className={styles.progressBar}
            role="progressbar"
            aria-valuenow={currentStep}
            aria-valuemin={0}
            aria-valuemax={totalSteps}
            aria-label={`Step ${currentStep} of ${totalSteps}`}
          >
            <div 
              className={styles.progressFill} 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
