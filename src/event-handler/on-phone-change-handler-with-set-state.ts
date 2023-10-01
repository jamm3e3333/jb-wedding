import {EmitEventWithSetStateHandlerType} from "./type/emit-event-with-set-state-handler.type";

export const handlePhoneChangeEvent: EmitEventWithSetStateHandlerType =
  (setState) =>
    (e) => {
      const phone = e.target.value.trim();
      const phoneReplaced = phone.replace(/[^0-9()+-]/g, '');
      setState(phoneReplaced);
    };
