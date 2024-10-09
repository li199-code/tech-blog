// src/components/LinkCard.js
import React from 'react';
import styles from './LinkCard.module.css';

const LinkCard = ({ title, description, link }) => (
  <a href={link} className={styles.card} target="_blank" rel="noopener noreferrer">
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </a>
);

export default LinkCard;
