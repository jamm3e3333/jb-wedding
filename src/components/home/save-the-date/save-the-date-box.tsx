import styles from './save-the-date-box.module.scss';
import React from 'react';
import SaveTheDateItem from './save-the-date-item';
import { useTranslation } from 'react-i18next';

const SaveTheDateBox: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={styles['savedate']}>
            <div className={styles['savedate--border']}>
                <SaveTheDateItem text={`${t('saveTheDate.name' as never)}:`} />
                <SaveTheDateItem
                    text={t('saveTheDate.date' as never) as string}
                />
            </div>
        </div>
    );
};

export default SaveTheDateBox;
