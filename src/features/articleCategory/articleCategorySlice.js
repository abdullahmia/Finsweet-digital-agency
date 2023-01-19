import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    editing: {}
}


export const articleCategorySlice = createSlice({
    name: 'articleCategory',
    initialState,
    reducers: {
        setEditing: (state, action) => {
            state.editing = action.payload;
        },
        clearEditing: (state) => {
            state.editing = {};
        }
    }
})


export const { setEditing, clearEditing } = articleCategorySlice.actions;
export default articleCategorySlice.reducer;