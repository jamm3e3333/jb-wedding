import {EventWithSetStateHandlerType} from "./type/event-with-set-state-handler.type";
import React from "react";

export const handlePhoneBlurEvent: EventWithSetStateHandlerType<React.FocusEvent<HTMLInputElement>, boolean> =
  (setState) =>
    (e) => {
      const isPhoneValid = !!e.target.value.trim()
      setState(isPhoneValid);
    };
