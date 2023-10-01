import React, { ChangeEventHandler } from 'react';
import styles from './text-area-field.module.scss';

const TextAreaField: React.FC<{
    name: string;
    placeholder: string;
    onChange: ChangeEventHandler;
    value: string;
    labelName?: string;
    className?: string;
    cols?: number;
    rows?: number;
}> = (props) => {
    return (
        <label htmlFor={props.name} className={styles['label-form']}>
            {props.labelName && props.labelName}
            <textarea
                className={`${props.className} ${styles['textarea-form']}`}
                name={props.name}
                placeholder={props.placeholder}
                cols={Number(props.cols ?? 30)}
                rows={Number(props.rows ?? 10)}
                onChange={props.onChange}
                value={props.value}
            ></textarea>
        </label>
    );
};

export default TextAreaField;
