import React from 'react';
import styles from './cover-box-image.module.scss';
import CoverWithImage, {
    ImageGradientInterface,
} from '../../ui/cover-with-image';
import Rsvp from './rsvp';
import FillFormText from './fill-form-text';
import RoutingButton from '../../ui/router/routing-button';
import { useTranslation } from 'react-i18next';

const GRADIENT_DIRECTION = 'to right';
const GRADIENT_FROM_COLOR = 'rgba(200, 148, 186, 0.2)';
const GRADIENT_TO_COLOR = 'rgba(192, 130, 174, 0.3)';

const imageGradient: ImageGradientInterface = {
    direction: GRADIENT_DIRECTION,
    fromColor: GRADIENT_FROM_COLOR,
    toColor: GRADIENT_TO_COLOR,
};

const CoverBoxImage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <CoverWithImage
                className={styles['header-image']}
                image={{
                    src: './img/running-on-beach.webp',
                    linearGradient: imageGradient,
                }}
            >
                <RoutingButton name={t('home' as never) as string} path="/" />
                <Rsvp />
                <FillFormText />
            </CoverWithImage>
        </>
    );
};

export default CoverBoxImage;
