import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';

const useStateOnElementEventEmitHook = <THTMLElement extends HTMLInputElement>(
    onChangeEventHandler?: (
        setStateFn: (value: React.SetStateAction<string>) => void
    ) => ChangeEventHandler<THTMLElement>,
    isValidEventTargetValue?: (
        setStateFn: (value: React.SetStateAction<boolean>) => void
    ) => FocusEventHandler<THTMLElement>
) => {
    const [eventTargetValueState, setEventTargetValue] = useState('');
    const [eventTargetValueIsValid, setEventTargetValueIsValid] =
        useState(true);

    return {
        onChangeEventHandler: onChangeEventHandler
            ? onChangeEventHandler(setEventTargetValue)
            : (event: React.ChangeEvent<THTMLElement>) => {
                  setEventTargetValue(event.target.value);
              },
        onBlurEventHandler: isValidEventTargetValue
            ? isValidEventTargetValue(setEventTargetValueIsValid)
            : (event: React.FocusEvent<THTMLElement>) => {
                  const valueTrimmed = event.target.value.trim();
                  setEventTargetValueIsValid(Boolean(valueTrimmed));
              },
        eventTargetValueState,
        eventTargetValueIsValid,
        setInitialState: <T extends ''>(initialState: T) => {
            setEventTargetValue(initialState);
            setEventTargetValueIsValid(true);
        },
    };
};

export default useStateOnElementEventEmitHook;
