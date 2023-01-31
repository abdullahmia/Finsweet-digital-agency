import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isEditing: false,
    editItem: {
        name: '',
        id: '',
    }
}


export const projectCategorySlice = createSlice({
    name: 'articleCategory',
    initialState,
    reducers: {
        setEditing: (state, action) => {
            state.isEditing = true;
            state.editItem = { name: action.payload.name, id: action.payload.id };
        },
        clearEditing: (state) => {
            state.isEditing = false;
            state.editItem = {
                name: '',
                id: ''
            }
        }
    }
})


export const { setEditing, clearEditing } = projectCategorySlice.actions;
export default projectCategorySlice.reducer;