import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  color: string;
}

const loadInitialColor = (): string => {
  if (typeof window !== "undefined" && localStorage) {
    const savedColor = localStorage.getItem("primaryColor");
    return savedColor ? JSON.parse(savedColor) : 'rgba(74, 113, 159, 1)';
  }
  return ''
};

const initialState: IInitialState = {
  color: loadInitialColor(),
};

const colorSlice = createSlice({
  name: "colorSlice",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    }
  },
});

export const selectColor = (state: RootState) => state.colorReducer.color;

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
