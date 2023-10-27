import React from 'react';
import styles from './reception-text.module.scss';
import { useTranslation } from 'react-i18next';

const ReceptionText: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={styles['reception']}>
            <p className={styles['reception--header']}>
                {t('ceremony.name' as never)}
            </p>
            <p className={styles['reception--place']}>
                {t('ceremony.place' as never)}
            </p>
        </div>
    );
};

export default ReceptionText;
