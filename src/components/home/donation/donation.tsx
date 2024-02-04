import DonationImg from './donation-img';
import styles from './donation.module.scss';
import React from 'react';
import DonationText from './donation-text';
import { useTranslation } from 'react-i18next';

const Donation: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={styles['donation']}>
            <p className={styles['donation--header']}>
                {t('giftList.header' as never)}
            </p>
            <div className={styles['donation--box']}>
                <DonationText />
                <DonationImg />
            </div>
        </div>
    );
};

export default Donation;
