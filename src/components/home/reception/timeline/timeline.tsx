import React from 'react';
import TimelineEvent from './timeline-event';
import styles from './timeline.module.scss';
import { useTranslation } from 'react-i18next';
const Timeline: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.event}>
            <TimelineEvent
                time={'4:30 pm'}
                eventName={
                    t('ceremony.timeline.event.arrive' as never) as string
                }
            />
            <TimelineEvent
                time={'5:00 pm'}
                eventName={
                    t(
                        'ceremony.timeline.event.ceremonyStart' as never
                    ) as string
                }
            />
            <TimelineEvent
                time={'9:00 pm'}
                eventName={
                    t('ceremony.timeline.event.partyEnd' as never) as string
                }
            />
        </div>
    );
};

export default Timeline;
