import React from "react";
import styles from './reception-text.module.scss'

const ReceptionText: React.FC = () => {
  return <div className={styles['reception'] }>
    <p className={styles['reception--header']}>
      Ceremony & Reception
    </p>
    <p className={styles['reception--place']}>
      Dominican Republic
    </p>
  </div>
}

export default ReceptionText;
