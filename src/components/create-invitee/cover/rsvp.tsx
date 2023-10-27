import React from 'react';
import styles from './rsvp.module.scss';
import { useTranslation } from 'react-i18next';
const Rsvp: React.FC = () => {
    const { t } = useTranslation();
    return <p className={styles['rsvp']}>{t('rsvp.name' as never)}</p>;
};

export default Rsvp;
