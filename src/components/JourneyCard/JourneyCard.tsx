import React, { useMemo } from "react";
import classNames from "classnames";
import styles from "./JourneyCard.module.css";
import { JourneyBlock } from "@/types";

/**
 * Status configuration for mapping statuses to colors and styles.
 * This centralizes the logic and makes it easy to extend.
 */
const STATUS_CONFIG = {
  current: {
    flagColor: "red",
    isHighlighted: false,
    isCurrent: true,
  },
  highlighted: {
    flagColor: "orange",
    isHighlighted: true,
    isCurrent: false,
  },
  locked: {
    flagColor: "purple",
    isHighlighted: false,
    isCurrent: false,
  },
} as const;

interface FlagIconProps {
  color: string;
  number: number;
  className?: string;
}

/**
 * FlagIcon: Renders the numbered flag indicator.
 */
const FlagIcon: React.FC<FlagIconProps> = ({ color, number, className }) => {
  const flagSrc = `/${color}Flag.svg`;

  return (
    <div className={classNames(styles.flagContainer, className)} aria-hidden="true">
      <div className={styles.flagRelative}>
        <img src={flagSrc} alt="" className={styles.flagImage} />
        <span className={styles.flagNumber}>{number}</span>
      </div>
    </div>
  );
};

interface JourneyCardProps {
  block: JourneyBlock;
  side: "left" | "right";
  index: number;
  isHandheld?: boolean;
}

/**
 * JourneyCard: A production-grade card component for the roadmap journey.
 * Follows BEM naming (via camelCase CSS modules) and accessibility best practices.
 */
const JourneyCard: React.FC<JourneyCardProps> = ({ block, side, index, isHandheld }) => {
  const { title, skills, status } = block;
  
  // Resolve configuration based on status
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.locked;

  // Memoize classes for performance and clarity
  const containerClasses = useMemo(() => 
    classNames(styles.journeyCard, {
      [styles.journeyCardLeft]: side === "left",
      [styles.journeyCardRight]: side === "right",
      [styles.journeyCardHighlighted]: config.isHighlighted,
      [styles.journeyCardCurrent]: config.isCurrent,
      [styles.handheld]: isHandheld,
      [styles[`journeyCard${config.flagColor.charAt(0).toUpperCase() + config.flagColor.slice(1)}`]]: true,
    }),
    [side, config, isHandheld]
  );

  return (
    <article 
      className={containerClasses} 
      aria-labelledby={`journey-title-${block.id}`}
    >
      {/* Flag Indicator */}
      <div className={classNames(styles.flagWrapper, {
        [styles.flagWrapperLeft]: side === "left",
        [styles.flagWrapperRight]: side === "right",
      })}>
        <FlagIcon color={config.flagColor} number={index + 1} />
      </div>

      {/* Card Content */}
      <div className={classNames(styles.cardBody, {
        [styles.cardBodyHighlighted]: config.isHighlighted,
      })}>
        <h3 id={`journey-title-${block.id}`} className={styles.cardTitle}>
          {title}
        </h3>

        <div className={styles.skillsSection}>
          <span className={styles.skillsLabel}>Skills:</span>
          <div className={styles.tagsContainer} role="list" aria-label="Target skills">
            {skills.map((skill, skillIndex) => (
              <span
                key={`${block.id}-skill-${skillIndex}`}
                role="listitem"
                className={classNames(styles.tag, {
                  [styles.tagHighlighted]: config.isHighlighted,
                  [styles.tagCurrent]: config.isCurrent,
                })}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default JourneyCard;
