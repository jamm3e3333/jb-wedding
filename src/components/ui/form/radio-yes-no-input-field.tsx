import React, { useState } from 'react';
import styles from './input-field.module.scss';
import radioStyles from './radio-yes-no-input-field.module.scss';

const RadioYesNoInputField: React.FC<{
    name: string;
    labelName: string;
    onSwitchRadioCb: (isAttending: boolean) => void;
    className?: string;
}> = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState(true);
    const onSwitchRadioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isSelectedYes = value.toLowerCase() === 'yes';

        props.onSwitchRadioCb(isSelectedYes);
        setSelectedAnswer(isSelectedYes);
    };

    return (
        <label htmlFor={props.name} className={`${styles['label-form']} `}>
            {props.labelName && props.labelName}

            <div className={radioStyles['radio-switch']}>
                <div>
                    yes
                    <input
                        className={`${styles['input-form']} ${props.className}`}
                        type="radio"
                        onChange={onSwitchRadioHandler}
                        name={props.name}
                        value="yes"
                        checked={selectedAnswer}
                    />
                </div>
                <div>
                    no
                    <input
                        className={`${styles['input-form']} ${props.className}`}
                        type="radio"
                        onChange={onSwitchRadioHandler}
                        name={props.name}
                        value="no"
                        checked={!selectedAnswer}
                    />
                </div>
            </div>
        </label>
    );
};

export default RadioYesNoInputField;
