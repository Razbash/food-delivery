import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedFiltersSlice {
    selectedFilters: number[]
}

const initialState:SelectedFiltersSlice = {
    selectedFilters: [],
}

export const filtersSlice = createSlice({
    name: 'selectedFilters',
    initialState: initialState,
    reducers: {
        changeFiltersCollection(state, action: PayloadAction<number[]>) {
            state.selectedFilters = action.payload;
        }
    }
})

export default filtersSlice.reducer;