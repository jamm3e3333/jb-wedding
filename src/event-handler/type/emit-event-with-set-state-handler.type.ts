import {ChangeEvent, FocusEvent} from "react";

export type EmitEventWithSetStateHandlerType = (
  setState: <TState extends string>(
    value: ((prevState: TState) => TState) | TState
  ) => void
) => (e: ChangeEvent<HTMLFormElement> | FocusEvent<HTMLFormElement>) => void;
