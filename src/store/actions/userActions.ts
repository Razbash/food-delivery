import { AppDispatch } from "..";
import axios from "../../axios/index";
import { userSlice } from "../slices/userSlice";

interface IFetchUserProps {
    id: number,
}

export const fetchUser = (props: IFetchUserProps) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.fetching());
            const response = await axios.get(`users/${props.id}`);
            dispatch(userSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(userSlice.actions.fetchError(error as Error));
        }
    }
}