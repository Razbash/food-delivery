import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import INotificationPayload from '../../interfaces/INotification';

const initialState = {
    open: false,
    notificationData: {
        type: "sucsses",
        text: "",
    }
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        start(state, action: PayloadAction<INotificationPayload>) {
            state.open = true;
            state.notificationData = action.payload;
        },
        stop(state) {
            state.open = false;
        },
    }
})

export default notificationSlice.reducer;