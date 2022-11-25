import { StateData } from "../../interfaces/stateData";
import { store } from "../config.store";
import { SET_INPUTS } from "../types/input.type";

interface Inputs {
  architecture: string;
  values: string;
}

interface Data extends Inputs {}

const DEFAULT_STATE = {
  inputs: {
    architecture: "",
    values: "",
  },
};

export const inputReducer = (
  state = DEFAULT_STATE,
  { type, payload }: StateData<Data>
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
