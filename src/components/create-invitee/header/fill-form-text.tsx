import React from 'react';
import styles from './fill-form-text.module.scss';
const FillFormText: React.FC = () => {
    return (
        <p className={styles['fillform-para']}>
            Please fill out the form below
        </p>
    );
};

export default FillFormText;
