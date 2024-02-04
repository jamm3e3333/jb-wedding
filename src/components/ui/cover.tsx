import React, { ReactNode } from 'react';
import styles from './cover.module.scss';

const Cover: React.FC<{ children?: ReactNode; className?: string }> = (
    props
) => {
    return (
        <section className={`${styles.cover} ${props.className}`}>
            {props.children}
        </section>
    );
};

export default Cover;
