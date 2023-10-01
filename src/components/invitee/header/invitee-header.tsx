import React from 'react';
import styles from './invitee-header.module.scss';
import CoverWithImage, {
    ImageGradientInterface,
} from '../../ui/cover-with-image';
import Rsvp from './rsvp';
import HeaderFillFormPara from './header-fill-form-para';
import RoutingButton from '../../ui/router/routing-button';

const GRADIENT_DIRECTION = 'to right';
const GRADIENT_FROM_COLOR = 'rgba(200, 148, 186, 0.2)';
const GRADIENT_TO_COLOR = 'rgba(192, 130, 174, 0.3)';

const imageGradient: ImageGradientInterface = {
    direction: GRADIENT_DIRECTION,
    fromColor: GRADIENT_FROM_COLOR,
    toColor: GRADIENT_TO_COLOR,
};

const InviteeHeader: React.FC = () => {
    return (
        <>
            <CoverWithImage
                className={styles['header-image']}
                image={{
                    src: './img/running-on-beach.jpeg',
                    linearGradient: imageGradient,
                }}
            >
                <RoutingButton name="Home" path="/" />
                <Rsvp />
                <HeaderFillFormPara />
            </CoverWithImage>
        </>
    );
};

export default InviteeHeader;
