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
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

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
            }, 12_000);
        }
    };

    return (
        <form className={styles['invitee-form']} onSubmit={handleSubmitInvitee}>
            <FormElement>
                <InputField
                    name={t('form.name.name' as never) as string}
                    type="text"
                    onChange={onNameChange}
                    labelName={'invitee-name'}
                    value={name}
                    placeholder={t('form.name.placeholder' as never) as string}
                    onBlur={onNameBlur}
                    isValid={isNameValid}
                />
                <InputField
                    name={t('form.surname.name' as never) as string}
                    type="text"
                    onChange={onSurnameChange}
                    labelName={'invitee-name'}
                    value={surname}
                    placeholder={
                        t('form.surname.placeholder' as never) as string
                    }
                    onBlur={onSurnameBlur}
                    isValid={isSurnameValid}
                />
            </FormElement>
            <FormElement>
                <InputField
                    name={t('form.phoneNumber.name' as never) as string}
                    type="tel"
                    onChange={onPhoneChange}
                    labelName={'phone'}
                    value={phone}
                    placeholder={
                        t('form.phoneNumber.placeholder' as never) as string
                    }
                    onBlur={onPhoneBlur}
                    isValid={isPhoneValid}
                />
                <InputField
                    name={t('form.email.name' as never) as string}
                    type="email"
                    onChange={onEmailChange}
                    labelName={'email'}
                    value={email}
                    placeholder={t('form.email.placeholder' as never) as string}
                    onBlur={onEmailBlur}
                    isValid={isEmailValid}
                />
            </FormElement>
            <FormElement>
                <RadioYesNoInputField
                    name={t('form.isAttending.name' as never) as string}
                    labelName={'is-attending'}
                    onSwitchRadioCb={handleSwitchRadioValue}
                />
            </FormElement>
            <FormElement>
                <TextAreaField
                    name={t('form.personDetail.name' as never) as string}
                    labelName="invitee-description"
                    placeholder={
                        t('form.personDetail.placeholder' as never) as string
                    }
                    onChange={onInviteeDescriptionChange}
                    value={inviteeDescription}
                    onBlur={onInviteeDescriptionBlur}
                    isValid={isDescriptionValid}
                />
                <TextAreaField
                    name={t('form.foodAllergies.name' as never) as string}
                    labelName="invitee-description"
                    placeholder={
                        t('form.foodAllergies.placeholder' as never) as string
                    }
                    onChange={onFoodAllergiesChange}
                    value={foodAllergies}
                />
            </FormElement>
            <FormElement>
                <TextAreaField
                    name={
                        t('form.questionsAndComments.name' as never) as string
                    }
                    onChange={onQuestionsCommentsChange}
                    labelName={'questions-comments'}
                    value={questionComments}
                    placeholder={
                        t(
                            'form.questionsAndComments.placeholder' as never
                        ) as string
                    }
                />
            </FormElement>
            <SubmitMessage
                isDisplayed={isSubmittedMessageDisplayed}
                isSuccessful={isSubmittedFormSuccessful}
                status={submittedFormStatus}
            />
            <SubmitButton
                buttonValue={t('form.submit' as never) as string}
                name={'submit-invitee'}
                disabled={isSubmitDisabled}
            />
        </form>
    );
};

export default CreateInviteeForm;
