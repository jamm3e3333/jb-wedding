import React from 'react';
import styles from './icon.style.module.scss';
const ArrowUp: React.FC<{ className?: string | undefined }> = ({
    className,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={`${className} ${styles['info-icon']}`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
        </svg>
    );
};

export default ArrowUp;
