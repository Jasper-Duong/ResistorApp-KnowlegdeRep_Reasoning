import { R } from "../../interfaces/resistor";
import { StateData } from "../../interfaces/stateData";
import { store } from "../config.store";
import { SET_RESISTORS } from "../types/input.type";

type Resistors = R[];

type State = {
  resistors: Resistors;
};

const DEFAULT_STATE: State = {
  resistors: [],
};

export const resistorsReducer = (
  state = DEFAULT_STATE,
  { type, payload }: StateData<any>
) => {
  switch (type) {
    case SET_RESISTORS:
      state.resistors = [...payload];
      return { ...state };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof store["getState"]>;
