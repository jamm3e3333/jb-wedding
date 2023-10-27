import styles from './submit-message.module.scss';
import React, { ReactNode } from 'react';
import getSubmitStyleForStatus from './mapper/status-to-submit-style.mapper';
import getIconForStatus from './mapper/status-to-icon.mapper';
import { StatusType } from './type/status-type';
import { useTranslation } from 'react-i18next';

const SubmitMessage: React.FC<{
    children?: ReactNode | undefined;
    isDisplayed: boolean;
    status: StatusType;
    isSuccessful?: boolean;
    className?: string;
}> = (props) => {
    const { t } = useTranslation();
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
                    <p>
                        {t(
                            `form.submittedMessage.${
                                props.status ?? 'error'
                            }` as never
                        )}
                    </p>
                </div>
            )}
        </>
    );
};

export default SubmitMessage;
