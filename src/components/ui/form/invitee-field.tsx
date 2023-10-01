import React, { ReactNode } from 'react';
import styles from './invitee-field.module.scss';
const InviteeField: React.FC<{ children?: ReactNode | undefined }> = (
    props
) => {
    return <div className={styles['invitee-field']}>{props.children}</div>;
};

export default InviteeField;
