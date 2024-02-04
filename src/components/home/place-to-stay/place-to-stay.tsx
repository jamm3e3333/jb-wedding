import Box from '../../ui/box';
import React from 'react';
import styles from './place-to-stay.module.scss';
import { useTranslation } from 'react-i18next';
const PlaceToStay: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Box className={styles['place-box']}>
            <h1 className={styles['place-header']}>
                {t('placesToStay.header' as never)}
            </h1>
            <a
                className={styles['place-anchor']}
                href="https://www.instagram.com/mosquitocolonial"
                target="_blank"
            >
                Mosquito Colonial
            </a>

            <a
                className={styles['place-anchor']}
                href="https://www.instagram.com/granhoteleuropard"
                target="_blank"
            >
                Gran Hotel Europa
            </a>
            <a
                className={styles['place-anchor']}
                href="https://abnb.me/ZLPqG8wvBFb"
                target="_blank"
            >
                Airbnb Colonial Loft Hermanas Mirabal
            </a>
        </Box>
    );
};

export default PlaceToStay;
