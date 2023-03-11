import { AppDispatch } from "..";
import { userSlice } from "./userSlice";
import axios from "../../utils/axios";
import IUser from "../../screens/Auth/interfaces/IUser";

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

export const sendUser = (user: IUser) => {
    return async (dispatch: AppDispatch) => {
        try {
            await axios({
                method: 'POST',
                url: 'users',
                data: {
                    ...user
                }
            });
        } catch (error) {
            dispatch(userSlice.actions.fetchError(error as Error));
        }
    }
}