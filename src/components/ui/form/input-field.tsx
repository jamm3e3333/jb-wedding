import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import styles from './input-field.module.scss';
import InvalidFieldText from './invalid-field-text';

const InputField: React.FC<{
    type: React.HTMLInputTypeAttribute;
    labelName: string;
    name: string;
    isValid?: boolean;
    placeholder?: string;
    value: string;
    onChange?: ChangeEventHandler;
    onBlur?: FocusEventHandler;
    className?: string;
    required?: boolean;
}> = (props) => {
    return (
        <label htmlFor={props.labelName} className={styles['label-form']}>
            {props.name && props.name}
            <input
                className={`${styles['input-form']} ${props.className}`}
                type={props.type}
                onChange={props.onChange}
                name={props.labelName}
                placeholder={props.placeholder}
                required={props.required}
                value={props.value}
                onBlur={props.onBlur}
            />
            {!props.isValid && props.isValid !== undefined && (
                <InvalidFieldText invalidTextName={props.name} />
            )}
        </label>
    );
};

export default InputField;
