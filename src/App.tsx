import CoverWithImage, {
    ImageGradientInterface,
} from './components/ui/cover-with-image';
import LandingAnnouncement from './components/home/landing-announcement';
import Reception from './components/reception/reception';

const COVER_IMAGE_FILE_PATH = './img/bj_pier_walking.jpeg';
const GRADIENT_DIRECTION = 'to right';
const GRADIENT_FROM_COLOR = 'rgba(200, 148, 186, 0.2)';
const GRADIENT_TO_COLOR = 'rgba(192, 130, 174, 0.3)';

const imageGradient: ImageGradientInterface = {
    direction: GRADIENT_DIRECTION,
    fromColor: GRADIENT_FROM_COLOR,
    toColor: GRADIENT_TO_COLOR,
};

function App() {
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
        </>
    );
}

export default App;
