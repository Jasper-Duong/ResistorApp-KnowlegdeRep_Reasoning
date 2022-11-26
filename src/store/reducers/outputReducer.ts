import { StateData } from "../../interfaces/stateData";
import { store } from "../config.store";
import { SET_RESULT } from "../types/input.type";

type State = {
  output: number;
};

const DEFAULT_STATE: State = {
  output: 0,
};

export const outputReducer = (
  state = DEFAULT_STATE,
  { type, payload }: StateData<any>
) => {
  switch (type) {
    case SET_RESULT:
      state.output = payload;
      return { ...state };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof store["getState"]>;
