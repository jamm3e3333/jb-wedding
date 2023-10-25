import { useState } from 'react';

const useStateOnSwitchRadioEventHook = () => {
    const [eventTargetValueState, setEventTargetValue] = useState(true);

    return {
        handleSwitchRadioValue: (value: boolean) => {
            setEventTargetValue(value);
        },
        eventTargetValueState,
    };
};

export default useStateOnSwitchRadioEventHook;
