import styles from './submit-message.module.scss';
import React, { ReactNode } from 'react';

const SubmitMessage: React.FC<{
    children: ReactNode | undefined;
    isDisplayed: boolean;
    className?: string;
}> = (props) => {
    return <>{props.isDisplayed && <div>{props.children}</div>}</>;
};

export default SubmitMessage;
