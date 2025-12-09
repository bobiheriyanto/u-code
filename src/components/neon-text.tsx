'use client';

import React from 'react';
import styles from './neon-text.module.scss';

interface NeonTextProps {
  text: string;
  className?: string;
}

const NeonText: React.FC<NeonTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`${styles.neonContainer} ${className}`}>
      <h1 className={styles.neonText}>
        {text.split('\n').map((line, index) => (
          <div key={index} className={styles.line}>
            {line}
          </div>
        ))}
      </h1>
    </div>
  );
};

export default NeonText;
