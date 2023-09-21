import React from "react";
import Cover from "../ui/cover";
import ReceptionImage from "./reception-image";
import styles from './reception.module.scss'
import ReceptionText from "./reception-text";

const Reception: React.FC = () => {
  return <Cover className={styles['reception']}>
    <ReceptionImage/>
    <ReceptionText/>
  </Cover>
}

export default Reception
