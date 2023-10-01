import {EventWithSetStateHandlerType} from "./type/event-with-set-state-handler.type";
import React from "react";
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const handleEmailBlurEvent: EventWithSetStateHandlerType<React.FocusEvent<HTMLInputElement>, boolean> =
  (setState) =>
    (e) => {
      const isPhoneValid = EMAIL_REGEX.test(e.target.value.trim())
      setState(isPhoneValid);
    };
