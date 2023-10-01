import React from 'react';
import styles from './submit-button.module.scss';
const SubmitButton: React.FC<{
    className?: string;
    buttonValue: string;
    name: string;
    disabled: boolean;
}> = (props) => {
    return (
        <input
            type="submit"
            value={props.buttonValue}
            name={props.name}
            className={`${styles['submit-invitee']} ${props.className}`}
            disabled={props.disabled}
        />
    );
};

export default SubmitButton;
