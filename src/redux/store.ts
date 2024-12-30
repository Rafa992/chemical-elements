import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {authApi} from '../api/auth.api'
import colorSlice from "./slices/colorSlice";
import errorSlice from "./slices/errorSlice";
import modalSlice from "./slices/modalSlice";
import userSlice from "./slices/userSlice";
import wordsSlice from "./slices/wordsSlice";

const store = configureStore({
    reducer: {
        wordsReducer: wordsSlice,
        userReducer: userSlice,
        modalReducer: modalSlice,
        errorReducer: errorSlice,
        colorReducer: colorSlice,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(authApi.middleware) 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
