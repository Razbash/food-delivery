import { AppDispatch } from "..";
import axios from "../../utils/axios";
import {categoriesSlice} from "./caregoriesSlice";

export const fetchCategories = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(categoriesSlice.actions.fetching());
            const response = await axios.get('categories');
            dispatch(categoriesSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(categoriesSlice.actions.fetchError(error as Error));
        }
    }
}