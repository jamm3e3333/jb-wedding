import React from 'react';
import styles from './timeline.module.scss';

const TimelineEvent: React.FC<{
    className?: string;
    time: string;
    eventName: string;
}> = (props) => {
    return (
        <p className={styles['event--timeline']}>
            <p>{props.time}</p>
            <p className={styles['event--name']}>{props.eventName}</p>
        </p>
    );
};

export default TimelineEvent;
