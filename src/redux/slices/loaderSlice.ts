import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  loading: boolean;
}

const initialState: IInitialState = {
  loading: false,
};

const loaderSlice = createSlice({
  name: "loaderSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  },
});

export const selectLoading = (state: RootState) => state.loaderReducer.loading;

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
