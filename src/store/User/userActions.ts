import { AppDispatch } from "..";
import axios from "../../utils/axios";
import { userSlice } from "./userSlice";

export const fetchUser = (email: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.fetching());
            const response = await axios.get(`users?email=${email}`);
            dispatch(userSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(userSlice.actions.fetchError(error as Error));
        }
    }
}