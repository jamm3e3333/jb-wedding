import React from 'react';
import SuccessIcon from '../../../ui/icon/success.icon';
import ErrorIcon from '../../../ui/icon/error.icon';
import InfoIcon from '../../../ui/icon/info.icon';
import { StatusType } from '../type/status-type';
import WarningIcon from '../../../ui/icon/warning.icon';

const statusToIcon = new Map<StatusType, React.ReactNode>([
    ['success', <SuccessIcon />],
    ['error', <ErrorIcon />],
    ['validation-error', <ErrorIcon />],
    ['warning', <WarningIcon />],
    ['info', <InfoIcon />],
]);

const getIconForStatus = (status: StatusType): React.ReactNode => {
    const icon = statusToIcon.get(status);
    if (!icon) {
        return <InfoIcon />;
    }

    return icon;
};

export default getIconForStatus;
