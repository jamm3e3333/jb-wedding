import React from "react";

export type EmitEventWithSetStateHandlerType<TEventEmitType, TSetStateValue> = (
  setState: (
    value: React.SetStateAction<TSetStateValue>
  ) => void
) => (e: TEventEmitType) => void;


