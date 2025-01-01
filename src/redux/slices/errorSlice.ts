import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  errorStatus: boolean;
  errorMessage: string;
  severity: "error" | "success" | "warning" | "info";
  time: number;
}

const initialState: IInitialState = {
  errorStatus: false,
  errorMessage: "",
  severity: "info",
  time: 3000,
};

const errorSlice = createSlice({
  name: "errorSlice",
  initialState,
  reducers: {
    setErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.errorStatus = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    setSeverity: (
      state,
      action: PayloadAction<"error" | "success" | "warning" | "info">
    ) => {
      state.severity = action.payload;
    },
  },
});

export const selectErrorStatus = (state: RootState): boolean =>
  state.errorReducer.errorStatus;
export const selectErrorMessage = (state: RootState): string =>
  state.errorReducer.errorMessage;
export const selectSeverity = (state: RootState) => state.errorReducer.severity;
export const selectTime = (state: RootState) => state.errorReducer.time;

export const { setErrorStatus, setErrorMessage, setSeverity, setTime } =
  errorSlice.actions;
export default errorSlice.reducer;
