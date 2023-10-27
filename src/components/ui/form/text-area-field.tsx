import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import styles from './text-area-field.module.scss';
import InvalidFieldText from './invalid-field-text';

const TextAreaField: React.FC<{
    labelName: string;
    placeholder: string;
    onChange: ChangeEventHandler;
    value: string;
    name: string;
    className?: string;
    cols?: number;
    rows?: number;
    isValid?: boolean;
    onBlur?: FocusEventHandler;
}> = (props) => {
    return (
        <label htmlFor={props.labelName} className={styles['label-form']}>
            {props.name && props.name}
            <textarea
                className={`${props.className} ${styles['textarea-form']}`}
                name={props.labelName}
                placeholder={props.placeholder}
                cols={Number(props.cols ?? 25)}
                rows={Number(props.rows ?? 10)}
                onChange={props.onChange}
                value={props.value}
                onBlur={props.onBlur}
            ></textarea>
            {!props.isValid && props.isValid !== undefined && (
                <InvalidFieldText invalidTextName={props.name} />
            )}
        </label>
    );
};

export default TextAreaField;
