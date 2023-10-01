import React from 'react';
import InviteeForm from './form/invitee-form';
import InviteeHeader from './header/invitee-header';

const Invitee: React.FC = () => {
    return (
        <>
            <InviteeHeader />
            <InviteeForm />
        </>
    );
};

export default Invitee;
