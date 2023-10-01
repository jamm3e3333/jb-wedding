import React from "react";

export type EventWithSetStateHandlerType<TEventEmitType, TSetStateValue> = (
  setState: (
    value: React.SetStateAction<TSetStateValue>
  ) => void
) => (e: TEventEmitType) => void;


