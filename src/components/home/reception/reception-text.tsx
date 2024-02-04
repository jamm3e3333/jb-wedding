import React from 'react';
import styles from './reception-text.module.scss';
import { useTranslation } from 'react-i18next';
import Timeline from './timeline/timeline';
import MapPoint from '../../ui/icon/map-point';

const WEDDING_PLACE_URL_MAP =
    'https://www.google.com/maps/dir//Calle+Duarte+12-A,+Boca+Chica,+Dominican+Republic/@18.447913,-69.6840671,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8eaf7e3578ba17b1:0xdf9145386f70c8a3!2m2!1d-69.60173!2d18.4479366?entry=ttu';

const ReceptionText: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={styles['reception']}>
            <p className={styles['reception--header']}>
                {t('ceremony.name' as never)}
            </p>
            <a
                className={styles['reception--place']}
                href={WEDDING_PLACE_URL_MAP}
                target="_blank"
            >
                <MapPoint className={styles['reception--mappoint']} />
                Boca Marina, Boca Chica, {t('ceremony.place' as never)}
            </a>
            <Timeline />
        </div>
    );
};

export default ReceptionText;
