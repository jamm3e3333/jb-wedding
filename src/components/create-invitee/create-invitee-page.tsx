import React from 'react';
import CreateInviteeForm from './form/create-invitee-form';
import CoverBoxImage from './header/cover-box-image';

const CreateInviteePage: React.FC = () => {
    return (
        <>
            <CoverBoxImage />
            <CreateInviteeForm />
        </>
    );
};

export default CreateInviteePage;
