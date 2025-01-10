import clsx from 'clsx';
import React from 'react';

import styles from './Section.module.scss';

interface SectionItem {
  title: string;
  icon?: React.ReactNode;
  value?: string;
}

interface SectionProps {
  items: SectionItem[];
  className?: string;
}

const Section: React.FC<SectionProps> = ({ items, className }) => (
  <div className={clsx(styles.section, className)}>
    {items.map((item, index) => (
      <div key={index} className={styles.title}>
        <span className={styles.icon}>{item.icon}</span>
        <div className={styles.values}>
          <span className={styles.itemTitle}>{item.title}</span>
          <span className={styles.itemValue}>{item.value}</span>
        </div>
      </div>
    ))}
  </div>
);

export default Section;
