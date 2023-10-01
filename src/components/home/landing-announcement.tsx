import React from 'react';
import Box from '../ui/box';
import styles from './landing-announcement.module.scss';
import CoupleName from './couple-name';
import EventName from './event-name';
import SaveTheDateBox from './save-the-date/save-the-date-box';
import RoutingButton from '../ui/router/routing-button';
const LandingAnnouncement: React.FC = () => {
    return (
        <>
            <RoutingButton name="RVSP" path="/invitee" />
            <Box className={styles['announcement']}>
                <CoupleName />
                <EventName />
                <SaveTheDateBox />
            </Box>
        </>
    );
};

export default LandingAnnouncement;
