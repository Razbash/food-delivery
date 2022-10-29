import { AppDispatch } from "..";
import axios from "../../axios/index";
import IReaustorant from "../../interfaces/IReustorant";
import { reustorantsSlice } from "../slices/reustorantsSlice";

export const fetchReustorants = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(reustorantsSlice.actions.fetching());
            const response = await axios.get('reustorants');
            dispatch(reustorantsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(reustorantsSlice.actions.fetchError(error as Error));
        }
    }
}

export const changeFilterReustorants = (reustorants: IReaustorant[]) => {
    return (dispatch: AppDispatch) => {
        dispatch(reustorantsSlice.actions.fetchSuccess(reustorants));
    }
}