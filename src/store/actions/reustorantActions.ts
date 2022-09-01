import { AppDispatch } from "..";
import axios from "../../axios/index";
import { reustorantSlice } from "../slices/reustorantSlice";

interface IFetchReustorantProps {
    id: number,
}

export const fetchReustorant = (props: IFetchReustorantProps) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(reustorantSlice.actions.fetching());
            const response = await axios.get(`reustorants/${props.id}`);
            dispatch(reustorantSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(reustorantSlice.actions.fetchError(error as Error));
        }
    }
}