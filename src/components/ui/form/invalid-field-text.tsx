import styles from './invalid-field-test.module.scss';
import React from 'react';

const InvalidFieldText: React.FC<{ invalidTextName: string }> = (props) => {
    return (
        <span className={styles['text-invalid']}>
            <i className="fa fa-exclamation-circle"></i> Invalid or empty{' '}
            {props.invalidTextName}
        </span>
    );
};

export default InvalidFieldText;
