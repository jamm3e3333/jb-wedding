import React, { useState } from 'react';
import styles from './region-button.module.scss';
import ArrowUp from './icon/arrow-up';
import ArrowDown from './icon/arrow-down';
import { useTranslation } from 'react-i18next';
import RegionIcon from './icon/region.icon';

const RegionButton: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { t, i18n } = useTranslation();
    const handleRegionSelect = (region: string) => () => {
        void i18n.changeLanguage(region);
        setIsCollapsed(true);
    };
    const handleCollapseRegions = () => {
        setIsCollapsed((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className={styles['region-box']}>
            {isCollapsed && (
                <p
                    onClick={handleCollapseRegions}
                    className={`${styles['region-collapsed']}`}
                >
                    <RegionIcon className={styles['region-icon']} />
                    <ArrowDown className={styles['region-icon']} />
                </p>
            )}
            {!isCollapsed && (
                <>
                    <span onClick={handleCollapseRegions}>
                        <ArrowUp className={styles['region-icon']} />
                    </span>
                    <p
                        className={styles.region}
                        onClick={handleRegionSelect('en')}
                    >
                        🇺🇸 {t('header.language.en' as never)}
                    </p>
                    <p
                        className={styles.region}
                        onClick={handleRegionSelect('es')}
                    >
                        🇪🇸 {t('header.language.es' as never)}
                    </p>
                    <p
                        className={`${styles.region} ${styles['region-last']}`}
                        onClick={handleRegionSelect('cs')}
                    >
                        🇨🇿 {t('header.language.cs' as never)}
                    </p>
                </>
            )}
        </div>
    );
};

export default RegionButton;
