import styles from './submit-message.module.scss';
import React, { ReactNode } from 'react';
import getMessageForStatus from './mapper/status-to-message.mapper';
import getSubmitStyleForStatus from './mapper/status-to-submit-style.mapper';
import getIconForStatus from './mapper/status-to-icon.mapper';
import { StatusType } from './type/status-type';

const SubmitMessage: React.FC<{
    children?: ReactNode | undefined;
    isDisplayed: boolean;
    status: StatusType;
    isSuccessful?: boolean;
    className?: string;
}> = (props) => {
    return (
        <>
            {props.isDisplayed && (
                <div
                    className={`${getSubmitStyleForStatus(props.status)} ${
                        styles['submit-message']
                    }`}
                >
                    {props.children}

                    {getIconForStatus(props.status)}
                    <p>{getMessageForStatus(props.status)}</p>
                </div>
            )}
        </>
    );
};

export default SubmitMessage;
