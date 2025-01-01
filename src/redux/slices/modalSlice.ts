import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  settings: boolean;
  paletteModal: boolean;
  openConfirmModal: boolean;

}

const initialState: IInitialState = {
  settings: false,
  paletteModal: false,
  openConfirmModal: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<boolean>) => {
      state.settings = action.payload;
    },
    setPaletteModal: (state, action: PayloadAction<boolean>) => {
      state.paletteModal = action.payload;
    },
    setOpenConfirmModal: (state, action: PayloadAction<boolean>) => {
      state.openConfirmModal = action.payload;
    },
  },
});

export const selectPaletteModal = (state: RootState):boolean =>
  state.modalReducer.paletteModal;
export const selectSettings = (state: RootState):boolean =>
  state.modalReducer.settings;
export const selectOpenConfirmModal = (state: RootState):boolean =>
  state.modalReducer.openConfirmModal;

export const { setPaletteModal, setOpenConfirmModal, setSettings } = modalSlice.actions;
export default modalSlice.reducer;
