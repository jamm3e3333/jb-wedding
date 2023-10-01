import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';

const useStateOnElementEventEmitHook = <T extends HTMLFormElement>(
    onChangeEventHandler?: (
        setStateFn: <TState extends string>(
            value: ((prevState: TState) => TState) | TState
        ) => void
    ) => ChangeEventHandler<T>,
    isValidEventTargetValue?: (
        setStateFn: <TState extends string | boolean>(
            value: ((prevState: TState) => TState) | TState
        ) => void
    ) => FocusEventHandler<T>
) => {
    const [eventTargetValueState, setEventTargetValue] = useState('');
    const [eventTargetValueIsValid, setEventTargetValueIsValid] =
        useState(true);

    return {
        onChangeEventHandler: onChangeEventHandler
            ? onChangeEventHandler(setEventTargetValue)
            : (event: React.ChangeEvent<T>) => {
                  setEventTargetValue(event.target.value);
              },
        onBlurEventHandler: isValidEventTargetValue
            ? isValidEventTargetValue(setEventTargetValueIsValid)
            : (event: React.FocusEvent<T>) => {
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
