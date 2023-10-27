import styles from './invalid-field-test.module.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

const InvalidFieldText: React.FC<{ invalidTextName: string }> = (props) => {
    const { t } = useTranslation();
    return (
        <span className={styles['text-invalid']}>
            <i className="fa fa-exclamation-circle"></i>
            &nbsp; {t('form.invalid' as never)}: {props.invalidTextName}
        </span>
    );
};

export default InvalidFieldText;
