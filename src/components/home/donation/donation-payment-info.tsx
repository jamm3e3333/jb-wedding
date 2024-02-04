import React from 'react';
import CreditCardIcon from '../../ui/icon/credit-card.icon';
import styles from './donation-payment-info.module.scss';
import { useTranslation } from 'react-i18next';

const DonationPaymentInfo: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles['donation--payment']}>
            <div className={styles['donation--account']}>
                <CreditCardIcon className={styles['donation--card-icon']} />
                <p className={styles['donation--account-number']}>
                    {t('giftList.account.savings' as never)} 14764530018
                </p>
            </div>
            <div className={styles['donation--account']}>
                <CreditCardIcon className={styles['donation--card-icon']} />
                <p className={styles['donation--account-number']}>
                    {t('giftList.account.cardID' as never)} 402-2020669-8
                </p>
            </div>
        </div>
    );
};

export default DonationPaymentInfo;
