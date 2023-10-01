import {EmitEventWithSetStateHandlerType} from "./type/emit-event-with-set-state-handler.type";
import {isValidPhoneNumber} from 'react-phone-number-input'

export const handlePhoneBlurEvent: EmitEventWithSetStateHandlerType =
  (setState) =>
    (e) => {
      const isPhoneValid = isValidPhoneNumber(e.target.value.trim())
      setState(isPhoneValid);
    };
