import React from 'react';
import SlimSpan from '../../ui/slim-span';
import styles from './event-name.module.scss';
import { useTranslation } from 'react-i18next';

const EventName: React.FC = () => {
    const { t } = useTranslation();
    return (
        <SlimSpan className={styles['event-name']}>
            {t('landing' as never)}
        </SlimSpan>
    );
};

export default EventName;
