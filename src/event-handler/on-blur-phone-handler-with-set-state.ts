import {EmitEventWithSetStateHandlerType} from "./type/emit-event-with-set-state-handler.type";
import {isValidPhoneNumber} from 'react-phone-number-input'
import React from "react";

export const handlePhoneBlurEvent: EmitEventWithSetStateHandlerType<React.FocusEvent<HTMLInputElement>, boolean> =
  (setState) =>
    (e) => {
      const isPhoneValid = isValidPhoneNumber(e.target.value.trim())
      setState(isPhoneValid);
    };
