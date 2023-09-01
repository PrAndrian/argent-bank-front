import { createSlice } from '@reduxjs/toolkit';

const editingFormSlice = createSlice({
    name: 'editingForm',
    initialState: {
       visible : false
    },
    reducers: {
        setVisibility: (state, action) => {
            state.visible = action.payload;
        }
    }
});

export const { setVisibility } = editingFormSlice.actions;

export default editingFormSlice.reducer;