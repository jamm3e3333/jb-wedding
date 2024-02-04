import React from 'react';
import styles from './dress-code-img.module.scss';
const DressCodeImg: React.FC<{
    imgUrl: string;
    alt: string;
    className?: string;
}> = (props) => {
    return (
        <div className={`${props.className} ${styles['image']}`}>
            <img
                className={styles['image--img']}
                src={props.imgUrl}
                alt={props.alt}
            />
        </div>
    );
};

export default DressCodeImg;
