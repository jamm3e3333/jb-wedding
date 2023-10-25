import React, { FormEvent, useState } from 'react';
import InputField from '../../ui/form/input-field';
import useStateOnElementEventEmitHook from '../../../hooks/use-state-on-element-event-emit.hook';
import TextAreaField from '../../ui/form/text-area-field';
import styles from './create-invitee.module.scss';
import FormElement from '../../ui/form/form-element';
import SubmitButton from '../../ui/form/submit-button';
import useStateOnSwitchRadioEventHook from '../../../hooks/use-state-on-switch-radio-event.hook';
import { createInviteeRequest } from '../create-invitee.request';
import { handleOnPhoneChangeEvent } from '../../ui/form/event-handler/handle-on-phone-change-with-set-state';
import { handlePhoneBlurEvent } from '../../ui/form/event-handler/handle-on-blur-phone-with-set-state';
import { handleEmailBlurEvent } from '../../ui/form/event-handler/handle-on-blur-email-with-set-state';
import SubmitMessage from './submit-message';
import { StatusType } from './type/status-type';
import RadioYesNoInputField from '../../ui/form/radio-yes-no-input-field';
import { AxiosError } from 'axios';

const setInitialStateForSetStateFns = (
    ...args: (<T extends ''>(initialState: T) => void)[]
) => {
    for (const arg of args) {
        arg('');
    }
};

const CreateInviteeForm: React.FC = () => {
    const [isSubmitDisabled, setSubmitDisabled] = useState(false);
    const [isSubmittedMessageDisplayed, setIsSubmittedMessageDisplayed] =
        useState(false);
    const [submittedFormStatus, setSubmittedFormStatus] =
        useState<StatusType>('info');
    const [isSubmittedFormSuccessful, setIsSubmittedFormSuccessful] =
        useState(true);

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
        handleOnPhoneChangeEvent,
        handlePhoneBlurEvent
    );

    const { eventTargetValueState: isAttending, handleSwitchRadioValue } =
        useStateOnSwitchRadioEventHook();

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
        setTimeout(() => setSubmitDisabled(false), 9_000);

        if (
            !isNameValid ||
            !isPhoneValid ||
            !isSurnameValid ||
            !isEmailValid ||
            !isDescriptionValid ||
            !name ||
            !surname ||
            !email ||
            !phone ||
            !inviteeDescription
        ) {
            setSubmittedFormStatus('warning');
            setIsSubmittedMessageDisplayed(true);

            setTimeout(() => {
                setIsSubmittedMessageDisplayed(false);
                setSubmittedFormStatus('info');
                setIsSubmittedFormSuccessful(true);
            }, 7_000);
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
            setIsSubmittedFormSuccessful(true);
            setIsSubmittedMessageDisplayed(true);
            setSubmittedFormStatus('success');
        } catch (error) {
            if (
                error instanceof AxiosError &&
                error.response?.data.statusCode === 422
            ) {
                setSubmittedFormStatus('validation-error');
            } else {
                setSubmittedFormStatus('error');
            }

            setIsSubmittedMessageDisplayed(true);
            setIsSubmittedFormSuccessful(false);
        } finally {
            setTimeout(() => {
                setIsSubmittedMessageDisplayed(false);
                setSubmittedFormStatus('info');
                setIsSubmittedFormSuccessful(true);
            }, 7_000);
        }
    };

    return (
        <form className={styles['invitee-form']} onSubmit={handleSubmitInvitee}>
            <FormElement>
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
            </FormElement>
            <FormElement>
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
            </FormElement>
            <FormElement>
                <RadioYesNoInputField
                    labelName="Are you attending the wedding?"
                    name="is-attending"
                    onSwitchRadioCb={handleSwitchRadioValue}
                />
            </FormElement>
            <FormElement>
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
            </FormElement>
            <FormElement>
                <TextAreaField
                    labelName={'Questions/Comments'}
                    onChange={onQuestionsCommentsChange}
                    name={'questions-comments'}
                    value={questionComments}
                    placeholder={'Can I bring any plátanos?'}
                />
            </FormElement>
            <SubmitMessage
                isDisplayed={isSubmittedMessageDisplayed}
                isSuccessful={isSubmittedFormSuccessful}
                status={submittedFormStatus}
            />
            <SubmitButton
                buttonValue={'Submit'}
                name={'submit-invitee'}
                disabled={isSubmitDisabled}
            />
        </form>
    );
};

export default CreateInviteeForm;
