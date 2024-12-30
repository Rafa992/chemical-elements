import { User } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
    user: User
}

const initialState: IInitialState = {
    user: {} as User
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        } 
    }
})

export const selectUser = (state: RootState) => state.userReducer.user

export const {setUser} = userSlice.actions
export default userSlice.reducer