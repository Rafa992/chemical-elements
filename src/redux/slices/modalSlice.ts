import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface IInitialState {
    paletteModal: boolean;
}

const initialState:IInitialState = {
    paletteModal: false,
}

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        setPaletteModal: (state, action:PayloadAction<boolean>) => {
            state.paletteModal = action.payload
        },
    }
});

export const selectPaletteModal = (state: RootState) => state.modalReducer.paletteModal;

export const {setPaletteModal} = modalSlice.actions
export default modalSlice.reducer