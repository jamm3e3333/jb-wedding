import React, { useState } from 'react';

const useStateOnChangeCheckboxEventHook = () => {
    const [eventTargetValueState, setEventTargetValue] = useState(false);

    return {
        onChangeEventHandler: <T extends HTMLFormElement>(
            event: React.ChangeEvent<T>
        ) => {
            setEventTargetValue(event.target.checked);
        },
        eventTargetValueState,
    };
};

export default useStateOnChangeCheckboxEventHook;
