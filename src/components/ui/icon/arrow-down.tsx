import React from 'react';
import styles from './icon.style.module.scss';

const ArrowDown: React.FC<{ className?: string | undefined }> = ({
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
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
};

export default ArrowDown;
