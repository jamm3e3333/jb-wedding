import React from "react";
import SlimSpan from "../ui/slim-span";
import styles from './event-name.module.scss'

const EventName: React.FC = () => {
  return <SlimSpan className={styles['event-name']}>
          are getting married
  </SlimSpan>
}

export default EventName;
