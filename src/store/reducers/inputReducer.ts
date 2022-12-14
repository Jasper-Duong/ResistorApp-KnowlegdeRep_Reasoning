import { StateData } from "../../interfaces/stateData";
import { store } from "../config.store";
import { SET_INPUTS } from "../types/input.type";

interface Inputs {
  architecture: string;
  values: string;
}

type State = {
  inputs: Inputs;
};

const DEFAULT_STATE: State = {
  inputs: {
    architecture: "",
    values: "",
  },
};

export const inputReducer = (
  state = DEFAULT_STATE,
  { type, payload }: StateData<any>
) => {
  switch (type) {
    case SET_INPUTS:
      state.inputs = { ...payload };
      return { ...state };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof store["getState"]>;
