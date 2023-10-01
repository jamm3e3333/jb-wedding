import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import styles from './input-field.module.scss';

const InputField: React.FC<{
    type: React.HTMLInputTypeAttribute;
    name: string;
    isValid?: boolean;
    labelName?: string;
    placeholder?: string;
    value?: string | boolean;
    onChange?: ChangeEventHandler;
    onBlur?: FocusEventHandler;
    className?: string;
    required?: boolean;
}> = (props) => {
    return (
        <label
            htmlFor={props.name}
            className={`${styles['label-form']} ${
                props.type === 'checkbox' ? styles['label-form--row'] : ''
            }`}
        >
            {props.labelName && props.labelName}
            {typeof props.value === 'string' && 'value' in props ? (
                <>
                    <input
                        className={`${styles['input-form']} ${props.className}`}
                        type={props.type}
                        onChange={props.onChange}
                        name={props.name}
                        placeholder={props.placeholder}
                        required={props.required}
                        value={props.value}
                        onBlur={props.onBlur}
                    />
                    {!props.isValid && props.isValid !== undefined && (
                        <span className={styles['input-form-invalid']}>
                            <i className="fa fa-exclamation-circle"></i> Invalid{' '}
                            {props.labelName}
                        </span>
                    )}
                </>
            ) : (
                <input
                    className={`${styles['input-form']} ${props.className}`}
                    type={props.type}
                    onChange={props.onChange}
                    name={props.name}
                    placeholder={props.placeholder}
                    required={props.required}
                />
            )}
        </label>
    );
};

export default InputField;
