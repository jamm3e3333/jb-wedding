import { useState } from 'react';

const useStateOnSwitchRadioEventHook = () => {
    const [eventTargetValueState, setEventTargetValue] = useState(true);

    return {
        handleSwitchRadioValue: (value) => {
            setEventTargetValue(value);
        },
        eventTargetValueState,
    };
};

export default useStateOnSwitchRadioEventHook;
