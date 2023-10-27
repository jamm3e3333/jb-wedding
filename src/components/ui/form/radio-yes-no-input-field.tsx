import React, { useState } from 'react';
import styles from './input-field.module.scss';
import radioStyles from './radio-yes-no-input-field.module.scss';
import { useTranslation } from 'react-i18next';

const RadioYesNoInputField: React.FC<{
    labelName: string;
    name: string;
    onSwitchRadioCb: (isAttending: boolean) => void;
    className?: string;
}> = (props) => {
    const { t } = useTranslation();
    const [selectedAnswer, setSelectedAnswer] = useState(true);
    const onSwitchRadioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isSelectedYes = value.toLowerCase() === 'yes';

        props.onSwitchRadioCb(isSelectedYes);
        setSelectedAnswer(isSelectedYes);
    };

    return (
        <label htmlFor={props.labelName} className={`${styles['label-form']} `}>
            {props.name && props.name}

            <div className={radioStyles['radio-switch']}>
                <div>
                    {t('form.isAttending.yes' as never) as string}
                    <input
                        className={`${styles['input-form']} ${props.className}`}
                        type="radio"
                        onChange={onSwitchRadioHandler}
                        name={props.labelName}
                        value="yes"
                        checked={selectedAnswer}
                    />
                </div>
                <div>
                    {t('form.isAttending.no' as never) as string}
                    <input
                        className={`${styles['input-form']} ${props.className}`}
                        type="radio"
                        onChange={onSwitchRadioHandler}
                        name={props.labelName}
                        value="no"
                        checked={!selectedAnswer}
                    />
                </div>
            </div>
        </label>
    );
};

export default RadioYesNoInputField;
