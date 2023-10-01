import styles from './routing-button.module.scss';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const RoutingButton: React.FC<{ name: string; path: string }> = (props) => {
    const navigate = useNavigate();
    const handleOnClickForRouting = () => {
        navigate(props.path);
    };
    return (
        <div
            className={styles['routing-button']}
            onClick={handleOnClickForRouting}
        >
            {props.name}
        </div>
    );
};

export default RoutingButton;
