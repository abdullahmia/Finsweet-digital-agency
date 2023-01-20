import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isEditing:false,
    editItem: {
        name: '',
        slug: '',
    }
}


export const articleCategorySlice = createSlice({
    name: 'articleCategory',
    initialState,
    reducers: {
        setEditing: (state, action) => {
            state.isEditing = true;
            state.editItem = { name: action.payload.name, slug: action.payload.slug};
        },
        clearEditing: (state) => {
            state.isEditing = false;
            state.editItem = {
                name: '',
                slug: ''
            }
        }
    }
})


export const { setEditing, clearEditing } = articleCategorySlice.actions;
export default articleCategorySlice.reducer;