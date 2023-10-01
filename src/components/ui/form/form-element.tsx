import React, { ReactNode } from 'react';
import styles from './form-element.module.scss';
const FormElement: React.FC<{ children?: ReactNode | undefined }> = (props) => {
    return <div className={styles['form-element']}>{props.children}</div>;
};

export default FormElement;
