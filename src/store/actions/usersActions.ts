import { AppDispatch } from "..";
import axios from "../../axios/index";
import { usersSlice } from "../slices/usersSlice";

export const fetchUsers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(usersSlice.actions.fetching());
            const response = await axios.get('users');
            dispatch(usersSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(usersSlice.actions.fetchError(error as Error));
        }
    }
}