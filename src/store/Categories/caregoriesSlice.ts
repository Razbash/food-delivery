import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICategory from '../../components/Categories/interfaces/ICategory';

interface CategoriesState {
    loading: boolean,
    error: string,
    categories: ICategory[],
}

const initialState:CategoriesState = {
    loading: false,
    error: '',
    categories: [],
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<ICategory[]>) {
            state.loading = false;
            state.categories = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default categoriesSlice.reducer;