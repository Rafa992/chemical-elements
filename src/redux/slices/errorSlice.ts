import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  errorStatus: boolean;
  errorMessage: string;
  severity: "error" | "success" | "warning" | "info";
}

const initialState: IInitialState = {
  errorStatus: false,
  errorMessage: "",
  severity: "info",
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

export const { setErrorStatus, setErrorMessage, setSeverity } =
  errorSlice.actions;
export default errorSlice.reducer;
