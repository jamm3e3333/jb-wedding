import React from 'react';
import DressCodeImg from './dress-code-img';
import styles from './dress-code.module.scss';
import DressCodeHeader from './dress-code-header';

const TROPICAL_MAN_CLOTHES_IMG_URL = './img/man-tropical.webp';
const TROPICAL_WOMAN_CLOTHES_IMG_URL = './img/woman-tropical.webp';
const DressCode: React.FC = () => {
    return (
        <>
            <DressCodeHeader />
            <div className={styles['dresscode']}>
                <DressCodeImg
                    imgUrl={TROPICAL_MAN_CLOTHES_IMG_URL}
                    alt="man tropical clothes"
                    className={styles['dresscode--left']}
                />
                <DressCodeImg
                    imgUrl={TROPICAL_WOMAN_CLOTHES_IMG_URL}
                    alt="woman tropical clothes"
                    className={styles['dresscode--right']}
                />
            </div>
        </>
    );
};

export default DressCode;
