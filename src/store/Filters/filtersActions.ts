import { AppDispatch } from "..";
import { filtersSlice } from "./filtersSlice";

export const setFilters = (filtersCollection: number[], filterId: number) => {
    return async (dispatch: AppDispatch) => {
        let filtersArr: number[] = filtersCollection;

        filtersArr.indexOf(filterId) === -1
            ? filtersArr = [...filtersArr, filterId]
            : filtersArr = filtersArr.filter(element => element !== filterId);

        dispatch(filtersSlice.actions.changeFiltersCollection(filtersArr));
    }
}