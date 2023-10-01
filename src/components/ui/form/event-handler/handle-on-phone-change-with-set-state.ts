import {EventWithSetStateHandlerType} from "./type/event-with-set-state-handler.type";
import {ChangeEvent} from "react";

export const handleOnPhoneChangeEvent: EventWithSetStateHandlerType<ChangeEvent<HTMLInputElement>, string> =
  (setState) =>
    (e) => {
      const phone = e.target.value.trim();
      const phoneReplaced = phone.replace(/[^0-9()+-]/g, '');
      setState(phoneReplaced);
    };
