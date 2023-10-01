import React, { FormEvent, useState } from 'react';
import InputField from '../../ui/form/input-field';
import useStateOnElementEventEmitHook from '../../../hooks/use-state-on-element-event-emit.hook';
import TextAreaField from '../../ui/form/text-area-field';
import styles from './invitee.module.scss';
import InviteeField from '../../ui/form/invitee-field';
import SubmitButton from '../../ui/form/submit-button';
import useStateOnChangeCheckboxEventHook from '../../../hooks/use-stat-on-change-checkbox-event.hook';
import { createInviteeRequest } from '../create-invitee.request';
import { handlePhoneChangeEvent } from '../../../event-handler/on-phone-change-handler-with-set-state';
import { handlePhoneBlurEvent } from '../../../event-handler/on-blur-phone-handler-with-set-state';
import { handleEmailBlurEvent } from '../../../event-handler/on-blur-email-handler-with-set-state';

const setInitialStateForSetStateFns = (
    ...args: (<T extends ''>(initialState: T) => void)[]
) => {
    for (const arg of args) {
        arg('');
    }
};

const InviteeForm: React.FC = () => {
    const [isSubmitDisabled, setSubmitDisabled] = useState(false);

    const {
        eventTargetValueState: name,
        onChangeEventHandler: onNameChange,
        onBlurEventHandler: onNameBlur,
        eventTargetValueIsValid: isNameValid,
        setInitialState: setInitialName,
    } = useStateOnElementEventEmitHook();

    const {
        eventTargetValueState: surname,
        onChangeEventHandler: onSurnameChange,
        onBlurEventHandler: onSurnameBlur,
        eventTargetValueIsValid: isSurnameValid,
        setInitialState: setInitialSurname,
    } = useStateOnElementEventEmitHook();

    const {
        eventTargetValueState: email,
        onChangeEventHandler: onEmailChange,
        onBlurEventHandler: onEmailBlur,
        eventTargetValueIsValid: isEmailValid,
        setInitialState: setInitialEmail,
    } = useStateOnElementEventEmitHook(undefined, handleEmailBlurEvent);

    const {
        eventTargetValueState: phone,
        onChangeEventHandler: onPhoneChange,
        onBlurEventHandler: onPhoneBlur,
        eventTargetValueIsValid: isPhoneValid,
        setInitialState: setInitialPhone,
    } = useStateOnElementEventEmitHook(
        handlePhoneChangeEvent,
        handlePhoneBlurEvent
    );

    const {
        eventTargetValueState: isAttending,
        onChangeEventHandler: onIsAttendingChange,
    } = useStateOnChangeCheckboxEventHook();

    const {
        eventTargetValueState: questionComments,
        onChangeEventHandler: onQuestionsCommentsChange,
        setInitialState: setInitialQuestionsAndComments,
    } = useStateOnElementEventEmitHook();

    const {
        eventTargetValueState: inviteeDescription,
        onChangeEventHandler: onInviteeDescriptionChange,
        setInitialState: setInitialDescription,
        onBlurEventHandler: onInviteeDescriptionBlur,
        eventTargetValueIsValid: isDescriptionValid,
    } = useStateOnElementEventEmitHook();

    const {
        eventTargetValueState: foodAllergies,
        onChangeEventHandler: onFoodAllergiesChange,
        setInitialState: setInitialFoodAllergies,
    } = useStateOnElementEventEmitHook();

    const handleSubmitInvitee = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitDisabled(true);
        setTimeout(() => setSubmitDisabled(false), 10_000);

        if (
            !isNameValid &&
            !isPhoneValid &&
            isSurnameValid &&
            !isEmailValid &&
            !isDescriptionValid
        ) {
            return;
        }

        try {
            await createInviteeRequest({
                email,
                name,
                surname,
                phone,
                isAttending,
                ...(inviteeDescription && {
                    personDescription: inviteeDescription,
                }),
                ...(foodAllergies && { foodRestriction: foodAllergies }),
            });

            setInitialStateForSetStateFns(
                setInitialEmail,
                setInitialName,
                setInitialPhone,
                setInitialSurname,
                setInitialDescription,
                setInitialQuestionsAndComments,
                setInitialFoodAllergies
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form className={styles['invitee-form']} onSubmit={handleSubmitInvitee}>
            <InviteeField>
                <InputField
                    labelName={'Name'}
                    type="text"
                    onChange={onNameChange}
                    name={'invitee-name'}
                    value={name}
                    placeholder={'Juan'}
                    onBlur={onNameBlur}
                    isValid={isNameValid}
                />
                <InputField
                    labelName={'Surname'}
                    type="text"
                    onChange={onSurnameChange}
                    name={'invitee-name'}
                    value={surname}
                    placeholder={'Pablo'}
                    onBlur={onSurnameBlur}
                    isValid={isSurnameValid}
                />
            </InviteeField>
            <InviteeField>
                <InputField
                    labelName={'Phone Number'}
                    type="tel"
                    onChange={onPhoneChange}
                    name={'phone'}
                    value={phone}
                    placeholder={'+1 (809) 859-6555'}
                    onBlur={onPhoneBlur}
                    isValid={isPhoneValid}
                />
                <InputField
                    labelName={'Email'}
                    type="email"
                    onChange={onEmailChange}
                    name={'email'}
                    value={email}
                    placeholder={'juan@pablo.do'}
                    onBlur={onEmailBlur}
                    isValid={isEmailValid}
                />
            </InviteeField>
            <InviteeField>
                <InputField
                    labelName={"Check if you're attending"}
                    type="checkbox"
                    onChange={onIsAttendingChange}
                    name={'is-attending'}
                />
            </InviteeField>
            <InviteeField>
                <TextAreaField
                    labelName={'Tell us something about you'}
                    name="invitee-description"
                    placeholder={'I like eating plátanos'}
                    onChange={onInviteeDescriptionChange}
                    value={inviteeDescription}
                    onBlur={onInviteeDescriptionBlur}
                    isValid={isDescriptionValid}
                />
                <TextAreaField
                    labelName={'Food allergies'}
                    name="invitee-description"
                    placeholder={'Broccoli'}
                    onChange={onFoodAllergiesChange}
                    value={foodAllergies}
                />
            </InviteeField>
            <InviteeField>
                <TextAreaField
                    labelName={'Questions/Comments'}
                    onChange={onQuestionsCommentsChange}
                    name={'questions-comments'}
                    value={questionComments}
                    placeholder={'Can I bring any plátanos?'}
                />
            </InviteeField>
            <SubmitButton
                buttonValue={'Submit'}
                name={'submit-invitee'}
                disabled={isSubmitDisabled}
            />
        </form>
    );
};

export default InviteeForm;
