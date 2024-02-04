import React from 'react';
import styles from './donation-text.module.scss';
import DonationPaymentInfo from './donation-payment-info';
import { useTranslation } from 'react-i18next';
const DonationText: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles['donation-text']}>
            <p>{t('giftList.thanks' as never)}</p>
            <p>{t('giftList.contribution' as never)}</p>
            <DonationPaymentInfo />
        </div>
    );
};

export default DonationText;
