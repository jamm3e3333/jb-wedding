import styles from './save-the-date-box.module.scss'
import React from "react";
import SaveTheDateItem from "./save-the-date-item";

const SaveTheDateBox: React.FC = () => {
  return <div className={styles['savedate']}>
    <div className={styles['savedate--border']}>
        <SaveTheDateItem text={'Save the date:'}/>
        <SaveTheDateItem text={'April 14 2024'}/>
    </div>
  </div>
}

export default SaveTheDateBox
