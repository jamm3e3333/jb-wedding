import {EmitEventWithSetStateHandlerType} from "./type/emit-event-with-set-state-handler.type";
import React from "react";
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const handleEmailBlurEvent: EmitEventWithSetStateHandlerType<React.FocusEvent<HTMLInputElement>, boolean> =
  (setState) =>
    (e) => {
      const isPhoneValid = EMAIL_REGEX.test(e.target.value.trim())
      setState(isPhoneValid);
    };
