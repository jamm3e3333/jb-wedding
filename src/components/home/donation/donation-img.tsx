import React from 'react';
const DONATION_IMG_URL = './img/donation.webp';
import styles from './donation-img.module.scss';

const DonationImg: React.FC = () => {
    return (
        <div className={styles['donation-picture']}>
            <img
                className={styles['donation-picture--img']}
                src={DONATION_IMG_URL}
                alt="donation image"
            />
        </div>
    );
};

export default DonationImg;
