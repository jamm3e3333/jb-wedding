import React, { ReactNode } from 'react';
import styles from './cover.module.scss';

export interface ImageGradientInterface {
    direction: 'to top' | 'to bottom' | 'to left' | 'to right';
    fromColor: string;
    toColor: string;
}
export interface ImageInterface {
    src: string;
    linearGradient?: ImageGradientInterface;
}

const CoverWithImage: React.FunctionComponent<{
    children?: ReactNode | undefined;
    className?: string;
    image: ImageInterface;
}> = (props) => {
    const imageUrl = `url(${props.image.src})`;
    const backgroundImage = props.image.linearGradient
        ? `linear-gradient(${props.image.linearGradient.direction}, ${props.image.linearGradient.fromColor}, ${props.image.linearGradient.toColor}), ${imageUrl}`
        : imageUrl;

    return (
        <section
            className={`${styles.cover} ${styles['cover--image']} ${props.className}`}
            style={{
                backgroundImage,
            }}
        >
            {props.children}
        </section>
    );
};

export default CoverWithImage;
