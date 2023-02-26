import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../../screens/Auth/interfaces/IUser';

interface UserState {
    loading: boolean,
    error: string,
    user: IUser | null | any,
}

const initialState:UserState = {
    loading: false,
    error: '',
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IUser>) {
            state.loading = false;
            state.user = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default userSlice.reducer;