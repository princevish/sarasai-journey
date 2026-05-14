import React from "react";
import classNames from "classnames";
import JourneyCard from "@/components/JourneyCard/JourneyCard";
import styles from "./Timeline.module.css";
import { JourneyBlock } from "@/types";
import useDevice from "@/hooks/useDevice";

interface TimelineProps {
  data: JourneyBlock[];
}

/**
 * Timeline: Renders a dynamic road-style path with journey blocks.
 * Alternates blocks between left and right columns on desktop.
 * Forces all blocks to the right on mobile/tablet.
 */
const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const { isHandheld } = useDevice();


  return (
    <div className={classNames(styles.timeline, { [styles.handheld]: isHandheld })}>
      {/* Central vertical bar */}
      <div className={styles.timelineBar}>
        <div className={styles.timelineBarInner} />
      </div>

      {/* Timeline rows - one per block */}
      <div className={styles.rowsContainer}>
        {data.map((block, index) => {
          const isOdd = (index + 1) % 2 !== 0;
          // Force all items to the right side on mobile/tablet
          const side = isHandheld ? "right" : (isOdd ? "left" : "right");
          const isCurrent = block.status === "current";

          return (
            <div
              key={block.id}
              className={classNames(styles.timelineRow, {
                [styles.rowLeft]: side === "left",
                [styles.rowRight]: side === "right",
                [styles.rowCurrent]: isCurrent,
              })}
            >
              {/* Left column */}
              <div className={classNames(styles.column, styles.columnLeft)}>
                {side === "left" && (
                  <JourneyCard block={block} side="left" index={index} isHandheld={isHandheld} />
                )}
              </div>

              {/* Right column */}
              <div className={classNames(styles.column, styles.columnRight)}>
                {side === "right" && (
                  <JourneyCard block={block} side="right" index={index} isHandheld={isHandheld} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
