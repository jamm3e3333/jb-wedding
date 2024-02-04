import CoverWithImage, {
    ImageGradientInterface,
} from './../ui/cover-with-image';
import LandingAnnouncement from './../home/landing-announcement/landing-announcement';
import Reception from './../home/reception/reception';
import PlaceToStay from './place-to-stay/place-to-stay';
import DressCode from './dress-code/dress-code';
import Donation from './donation/donation';

const COVER_IMAGE_FILE_PATH = './img/bj_pier_walking.webp';
const GRADIENT_DIRECTION = 'to right';
const GRADIENT_FROM_COLOR = 'rgba(200, 148, 186, 0.2)';
const GRADIENT_TO_COLOR = 'rgba(192, 130, 174, 0.3)';

const imageGradient: ImageGradientInterface = {
    direction: GRADIENT_DIRECTION,
    fromColor: GRADIENT_FROM_COLOR,
    toColor: GRADIENT_TO_COLOR,
};

function Home() {
    return (
        <>
            <CoverWithImage
                image={{
                    src: COVER_IMAGE_FILE_PATH,
                    linearGradient: imageGradient,
                }}
            >
                <LandingAnnouncement />
            </CoverWithImage>
            <Reception />
            <PlaceToStay />
            <DressCode />
            <Donation />
        </>
    );
}

export default Home;
