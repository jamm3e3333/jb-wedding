import React from 'react';
import styles from './fill-form-text.module.scss';
import { useTranslation } from 'react-i18next';
const FillFormText: React.FC = () => {
    const { t } = useTranslation();
    return (
        <p className={styles['fillform-para']}>{t('rsvp.fillForm' as never)}</p>
    );
};

export default FillFormText;
