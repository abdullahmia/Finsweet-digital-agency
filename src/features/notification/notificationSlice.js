import { createSlice } from '@reduxjs/toolkit';

// notification initial state
const initialState = {
    unread: 0
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        incrementUnread: (state) => {
            state.unread += 1
        },
        resetUnread: (state) => {
            state.unread = 0
        }
    }
})

export const { incrementUnread, resetUnread } = notificationSlice.actions
export default notificationSlice.reducer