import React from "react";
import Header from "@/components/Header/Header";
import Timeline from "@/components/Timeline/Timeline";
import { JourneyBlock } from "@/types";
import styles from "./JourneyPage.module.css";

interface JourneyPageProps {
  data: JourneyBlock[];
  currentStep?: number;
  totalSteps?: number;
}

const JourneyPage: React.FC<JourneyPageProps> = React.memo(({ 
  data, 
  currentStep = 4, 
  totalSteps = 5
}) => {
  return (
    <>
      <div className={styles.decorativeBlob} aria-hidden="true" />
      <Header currentStep={currentStep} totalSteps={totalSteps} />
      <main className={styles.mainContainer} id="main-content">
        <Timeline data={data} />
      </main>
    </>
  );
});

JourneyPage.displayName = "JourneyPage";

export default JourneyPage;
