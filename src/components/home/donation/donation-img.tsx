import React, { useEffect, useRef } from 'react';
const DONATION_IMG_URL = './img/donation.webp';
import styles from './donation-img.module.scss';
import { useAnimation, useInView, motion } from 'framer-motion';

const DonationImg: React.FC = () => {
    const donationImgRef = useRef(null);
    const isInView = useInView(donationImgRef, { once: true });
    const animationController = useAnimation();

    useEffect(() => {
        if (isInView) {
            void animationController.start('visible');
        }
    }, [animationController, isInView]);
    return (
        <motion.div
            className={styles['donation-picture']}
            ref={donationImgRef}
            variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animationController}
            transition={{
                duration: 0.6,
                delay: 0.1,
            }}
        >
            <img
                className={styles['donation-picture--img']}
                src={DONATION_IMG_URL}
                alt="donation image"
            />
        </motion.div>
    );
};

export default DonationImg;
