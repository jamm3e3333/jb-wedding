import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import styles from './text-area-field.module.scss';
import InvalidFieldText from './invalid-field-text';

const TextAreaField: React.FC<{
    name: string;
    placeholder: string;
    onChange: ChangeEventHandler;
    value: string;
    labelName: string;
    className?: string;
    cols?: number;
    rows?: number;
    isValid?: boolean;
    onBlur?: FocusEventHandler;
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
                onBlur={props.onBlur}
            ></textarea>
            {!props.isValid && props.isValid !== undefined && (
                <InvalidFieldText invalidTextName="empty field" />
            )}
        </label>
    );
};

export default TextAreaField;
