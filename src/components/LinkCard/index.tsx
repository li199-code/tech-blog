// src/components/LinkCard.js
import React from 'react';
import styles from './LinkCard.module.css';

const LinkCard = ({ title, link }) => (
  <a href={link} className={styles.card} target="_blank" rel="noopener noreferrer">
    <div className={styles.cardContent}>
      <h5>{title}</h5>
    </div>
  </a>
);

export default LinkCard;
