import { AppDispatch } from "..";
import axios from "../../utils/axios";
import { userSlice } from "./userSlice";

export const fetchUser = (email: string, id?: number) => {
    return async (dispatch: AppDispatch) => {
        let query;

        if (email) {
            query = `users?email=${email}`;
        } else if (id) {
            query = `users?id=${id}`;
        }

        if (query) {
            try {
                dispatch(userSlice.actions.fetching());
                const response = await axios.get(query);
                dispatch(userSlice.actions.fetchSuccess(response.data));
            } catch (error) {
                dispatch(userSlice.actions.fetchError(error as Error));
            }
        }
    }
}