import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    user: null,
    token: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        userLoggedOut: (state, action) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;