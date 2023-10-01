import React from 'react';
import styles from './header-fill-form-para.module.scss';
const HeaderFillFormPara: React.FC = () => {
    return (
        <p className={styles['fillform-para']}>
            Please fill out the form below
        </p>
    );
};

export default HeaderFillFormPara;
