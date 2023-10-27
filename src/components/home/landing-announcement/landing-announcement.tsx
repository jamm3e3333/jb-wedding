import React from 'react';
import Box from '../ui/box';
import styles from './landing-announcement.module.scss';
import CoupleName from './couple-name';
import EventName from './event-name';
import SaveTheDateBox from './save-the-date/save-the-date-box';
import RoutingButton from '../ui/router/routing-button';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';

const LandingAnnouncement: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <RoutingButton
                name={t('header.rsvp' as never) as string}
                path="/invitee"
            />
            <Box className={styles['announcement']}>
                <CoupleName />
                <EventName />
                <SaveTheDateBox />
            </Box>
        </>
    );
};

export default LandingAnnouncement;
