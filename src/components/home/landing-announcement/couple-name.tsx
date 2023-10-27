import React from 'react';
import styles from './couple-name.module.scss'
import SlimSpan from "../ui/slim-span";

const CoupleName: React.FC = () => {
  return <SlimSpan className={styles['couple-name']}>
    Brenda & Jakub
  </SlimSpan>
}

export default CoupleName
