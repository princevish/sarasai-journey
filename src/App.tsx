import React from "react";
import JourneyPage from "@/pages/JourneyPage/JourneyPage";
import journeyData from "@/data/journeyData";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <JourneyPage data={journeyData} />
    </div>
  );
}

export default App;
