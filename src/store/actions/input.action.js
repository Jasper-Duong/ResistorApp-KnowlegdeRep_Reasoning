import { SET_INPUTS, SET_RESISTORS, SET_RESULT } from "../types/input.type";

const setInputs = (data) => ({ type: SET_INPUTS, payload: data });
const setResistors = (data) => ({ type: SET_RESISTORS, payload: data });
const setResult = (data) => ({ type: SET_RESULT, payload: data });
export { setInputs, setResistors, setResult };
