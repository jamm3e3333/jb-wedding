import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './dress-code-header.module.scss';

const DressCodeHeader: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles['dresscode--box']}>
            <p className={styles['dresscode--header']}>
                {t('dressCode.header' as never)}
            </p>
            <p className={styles['dresscode--name']}>
                {t('dressCode.tropical' as never)}
            </p>
        </div>
    );
};

export default DressCodeHeader;
